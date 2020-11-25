import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { User } from 'models/user.model'
import { UsersService } from 'modules/users/users.service'

import { Strategy } from 'passport-jwt'

import credentials from '../../../dot.credentials'

export interface AccessTokenPayload {
  sub: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	private users: UsersService

	constructor(users: UsersService) {
		super({
			jwtFromRequest: (req) => this.extractJWT(req),
			ignoreExpiration: false,
			secretOrKey: credentials.email.key,
			signOptions: {
				expiresIn: '14d',
			},
		})

		this.users = users
	}

	extractJWT(req) {
		if(!req) return null;

		if(req.headers && req.header('authorization')) return req.header('authorization').replace(/Bearer\s?/, "").replace(/ /g, "");
		if(req.cookies) return req.cookies['_dotid_sess'];

		else return null;
	}

	async validate(payload: AccessTokenPayload): Promise<User> {
		const { sub: id } = payload

		const user = await this.users.get(id);

		if (!user) return null;

		return user
	}
}