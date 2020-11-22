import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { UsersService } from './users.service'
import { UsersRepository } from './users.repository'

import { User } from 'models/user.model'

@Module({
    imports: [
        SequelizeModule.forFeature([
            User,
        ]),
    ],
    providers: [
        UsersService,
        UsersRepository,
    ],
    exports: [
        UsersService,
        UsersRepository,
    ],
})
export class UsersModule {}