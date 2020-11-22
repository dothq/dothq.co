import { Injectable } from '@nestjs/common'

import ms = require('ms');

import { RefreshToken } from 'models/refresh-token.model'
import { User } from 'models/user.model'

@Injectable()
export class RefreshTokensRepository {
	public async createRefreshToken(user: User, expires: string): Promise<RefreshToken> {
		const token = new RefreshToken()

		token.user_id = user.id

		const exp = new Date()
		exp.setTime(exp.getTime() + ms(expires))

		token.expires = exp

		return token.save()
	}

	public async findById(id: number): Promise<RefreshToken | null> {
		return RefreshToken.findOne({
			where: {
				id,
			}
		})
	}
}