import { Column, Model, Table } from 'sequelize-typescript'

@Table({ tableName: 'users', underscored: true })
export class User extends Model<User> {
	@Column
	id: string

	@Column
	name: string

	@Column
	email: string

	@Column
	password: string

	@Column
	avatarId?: string = ''
}