import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { SequelizeModule } from '@nestjs/sequelize'

import { UsersModule } from '../users/users.module'

import { TokensService } from './tokens.service'
import { RefreshTokensRepository } from './refresh-tokens.repository'

import { IdController } from 'controllers/id.controller'
import { RefreshToken } from 'models/refresh-token.model'
import credentials from '../../../dot.credentials'
import { JwtStrategy } from './auth.strategy'
import { JWTGuard } from './auth.guard'

@Module({
    imports: [
        SequelizeModule.forFeature([
            RefreshToken,
        ]),
        JwtModule.register({
            secret: credentials.email.key,
            signOptions: {
                expiresIn: "14d", // This is when the access token expires
            }
        }),
        UsersModule
    ],
    controllers: [
        IdController
    ],
    providers: [
        TokensService,
        RefreshTokensRepository,
        JwtStrategy
    ],
})
export class AuthenticationModule {}