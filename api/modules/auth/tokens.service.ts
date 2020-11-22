import { Injectable, UnprocessableEntityException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { SignOptions, TokenExpiredError } from 'jsonwebtoken'

import ms from 'ms'

import { RefreshTokensRepository } from './refresh-tokens.repository'
import { UsersRepository } from 'modules/users/users.repository'
import { User } from 'models/user.model'
import { RefreshToken } from 'models/refresh-token.model'

import { 
	REFRESH_TOKEN_EXPIRED, 
	REFRESH_TOKEN_MALFORMED, 
	REFRESH_TOKEN_NON_EXISTANT, 
	REFRESH_TOKEN_REVOKED 
} from 'statuses'

const jwtOptions: SignOptions = {
	issuer: 'https://dothq.co',
	audience: 'https://dothq.co',
}

export interface RefreshTokenPayload {
	jti: number;
	sub: string
}

@Injectable()
export class TokensService {
	private readonly tokens: RefreshTokensRepository
	private readonly users: UsersRepository
	private readonly jwt: JwtService

	public constructor (tokens: RefreshTokensRepository, users: UsersRepository, jwt: JwtService) {
		this.tokens = tokens
		this.users = users
		this.jwt = jwt
	}

	public async generateAccessToken (user: User): Promise<string> {
		const opts: SignOptions = {
			...jwtOptions,
			subject: String(user.id),
		}

		return this.jwt.signAsync({}, opts)
	}

	public async generateRefreshToken(user: User, expires: string): Promise<string> {
		const token = await this.tokens.createRefreshToken(user, expires)

		const opts: SignOptions = {
			...jwtOptions,
			expiresIn: ms(expires),
			subject: String(user.id),
			jwtid: String(token.id),
		}

		return this.jwt.signAsync({}, opts)
	}

	public async resolveRefreshToken(encoded: string): Promise<{ user: User, token: RefreshToken }> {
		const payload = await this.decodeRefreshToken(encoded)
		const token = await this.getTokenFromRefreshToken(payload)
	
		if (!token) throw new UnprocessableEntityException(REFRESH_TOKEN_NON_EXISTANT)
		if (token.revoked) throw new UnprocessableEntityException(REFRESH_TOKEN_REVOKED)
	
		const user = await this.getUserFromRefreshToken(payload)
	
		if (!user) throw new UnprocessableEntityException(REFRESH_TOKEN_MALFORMED)
	
		return { user, token }
	}
	
	public async reactivateAccessToken(refresh: string): Promise<{ token: string, user: User }> {
		const { user } = await this.resolveRefreshToken(refresh)
	
		const token = await this.generateAccessToken(user)
	
		return { user, token }
	}
	  
	private async decodeRefreshToken(token: string): Promise<RefreshTokenPayload> {
		try {
		  return this.jwt.verifyAsync(token)
		} catch (e) {
			if (e instanceof TokenExpiredError) throw new UnprocessableEntityException(REFRESH_TOKEN_EXPIRED)
			else throw new UnprocessableEntityException(REFRESH_TOKEN_MALFORMED) 
		}
	}
	
	private async getUserFromRefreshToken(payload: RefreshTokenPayload): Promise<User> {
		const { sub } = payload
	
		if (!sub) throw new UnprocessableEntityException(REFRESH_TOKEN_MALFORMED)
	
		return this.users.findById(sub)
	  }
	
	private async getTokenFromRefreshToken(payload: RefreshTokenPayload): Promise<RefreshToken | null> {
		const { jti } = payload
	
		if (!jti) throw new UnprocessableEntityException(REFRESH_TOKEN_MALFORMED)
	
		return this.tokens.findById(jti)
	}
}