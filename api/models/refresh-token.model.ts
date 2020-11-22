import { Table, Column, Model } from 'sequelize-typescript'

@Table({ tableName: 'refresh_tokens', underscored: true })
export class RefreshToken extends Model<RefreshToken> {
	@Column
	user_id: string

	@Column
	revoked: boolean = false

	@Column
	expires: Date
}