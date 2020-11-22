import { SequelizeModule } from '@nestjs/sequelize';

import { User } from 'models/user.model';

import credentials from '../../dot.credentials';

export const DatabaseImport = SequelizeModule.forRoot({
	dialect: "postgres",
	host: credentials.postgres.host,
	port: credentials.postgres.port,
	password: credentials.postgres.password,
	username: credentials.postgres.username,
	database: "dothq",
	models: [User],
	synchronize: true,
	autoLoadModels: true
})
