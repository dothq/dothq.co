import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { User } from 'models/user.model'
import { UsersService } from 'modules/users/users.service'

import { ExtractJwt, Strategy } from 'passport-jwt'

import credentials from '../../../dot.credentials'

export interface AccessTokenPayload {
  sub: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	private users: UsersService

	constructor(users: UsersService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: credentials.email.key,
			signOptions: {
				expiresIn: '14d',
			},
		})

		this.users = users
	}

	async validate(payload: AccessTokenPayload): Promise<User> {
		const { sub: id } = payload

		const user = await this.users.get(id);

		if (!user) return null;

		return user
	}
}