import { Body, Controller, Get, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common'

import { UsersService } from 'modules/users/users.service'
import { TokensService } from 'modules/auth/tokens.service'

import { LoginRequest, RefreshRequest, RegisterRequest } from 'requests'

import { User } from 'models/user.model'
import { JWTGuard } from 'modules/auth/auth.guard'

import { sleep } from '../../lib/tools/security'

export interface AuthenticationPayload {
  payload: {
    type: string
    token: string
    refresh_token?: string
  }
}

@Controller('id')
export class IdController {
    private readonly users: UsersService
    private readonly tokens: TokensService

    public constructor (users: UsersService, tokens: TokensService) {
        this.users = users
        this.tokens = tokens
    }

    @Post('/sign-up')
    async register(@Body() body: RegisterRequest) {
        await sleep(2000);

        const user: any = await this.users.createFromRequest(body);

        return {
            statusCode: 200,
            data: await this.createTokenData(user)
        }
    }

    @Post('/sign-in')
    async login(@Body() body: LoginRequest) {
        await sleep(1000);

        const { email, password } = body;

        const user = await this.users.getBy("email", email);
        const valid = user ? await this.users.validateCredentials(user, password) : false;

        if (!valid) throw new UnauthorizedException("Invalid email or password");

        return {
            statusCode: 200,
            data: await this.createTokenData(user)
        }
    }

    @Post('/refresh-token')
    async refresh(@Body() body: RefreshRequest) {
        const { user, token } = await this.tokens.reactivateAccessToken(body.refresh_token)
    
        const data = this.buildResponsePayload(user, token)
    
        return {
            statusCode: 200,
            data
        }
    }

    @Get('/me')
    @UseGuards(JWTGuard)
    async getMe(@Req() req) {
        const { id } = req.user;
    
        const user = await this.users.get(id);
    
        return {
            statusCode: 200,
            data: user
        }
    }

    private async createTokenData(user: User) {
        const token = await this.tokens.generateAccessToken(user)
        const refresh = await this.tokens.generateRefreshToken(user, "30d")

        const data = this.buildResponsePayload(user, token, refresh)

        return data
    }

    private buildResponsePayload(user: User, accessToken: string, refreshToken?: string, ): AuthenticationPayload {
        return {
            payload: {
                type: 'bearer',
                token: accessToken,
                ...(refreshToken ? { refresh_token: refreshToken } : {}),
            }
        }
    }
}