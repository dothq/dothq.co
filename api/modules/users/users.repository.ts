import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

import { col, fn, where } from 'sequelize'

import { User } from 'models/user.model'
import { encrypt } from '../../../lib/tools/encrypt'
import { makeId } from '../../../lib/tools/id'

@Injectable()
export class UsersRepository {
	private readonly users: typeof User

	public constructor (@InjectModel(User) users: typeof User) {
		this.users = users
	}

	public async findById(id: string): Promise<User | null> {
		return this.users.findOne({
			where: {
				id,
			},
			attributes: { exclude: ["password"] }
		})
	}

	public async findBy(key: string, value: any): Promise<User | null> {
		return this.users.findOne({
			where: {
				[key]: where(fn('lower', col(key)), value),
			},
		})
	}

	public async create(name: string, email: string, password: string): Promise<User> {
		const user = new User()

		user.id = makeId();
		user.name = name;
		user.email = email;

		const hashed: string = await encrypt(password).then(password => password);

		user.password = hashed;

		return user.save()
	}
}