import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript'

@Table({ tableName: 'users', underscored: true })
export class User extends Model<User> {
	@Column({ primaryKey: true })
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