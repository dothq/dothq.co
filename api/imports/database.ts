import { SequelizeModule } from '@nestjs/sequelize';
import credentials from '../../dot.credentials';

export const DatabaseImport = SequelizeModule.forRoot({
	dialect: "postgres",
	host: credentials.postgres.host,
	port: credentials.postgres.port,
	password: credentials.postgres.password,
	username: credentials.postgres.username,
	database: "dothq",
	models: [],
})
