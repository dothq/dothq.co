import { Injectable, UnprocessableEntityException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { SignOptions, TokenExpiredError } from 'jsonwebtoken'

import ms = require('ms');

import { RefreshTokensRepository } from './refresh-tokens.repository'
import { UsersRepository } from 'modules/users/users.repository'
import { User } from 'models/user.model'
import { RefreshToken } from 'models/refresh-token.model'

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
	
		if (!token) throw new UnprocessableEntityException("Refresh token does not exist")
		if (token.revoked) throw new UnprocessableEntityException("Refresh token has been revoked")
	
		const user = await this.getUserFromRefreshToken(payload)
	
		if (!user) throw new UnprocessableEntityException("Refresh token is malformed")
	
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
			if (e instanceof TokenExpiredError) throw new UnprocessableEntityException("Refresh token has expired")
			else throw new UnprocessableEntityException("Refresh token is malformed") 
		}
	}
	
	private async getUserFromRefreshToken(payload: RefreshTokenPayload): Promise<User> {
		const { sub } = payload
	
		if (!sub) throw new UnprocessableEntityException("Refresh token is malformed")
	
		return this.users.findById(sub)
	  }
	
	private async getTokenFromRefreshToken(payload: RefreshTokenPayload): Promise<RefreshToken | null> {
		const { jti } = payload
	
		if (!jti) throw new UnprocessableEntityException("Refresh token is malformed")
	
		return this.tokens.findById(jti)
	}
}