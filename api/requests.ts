import { IsNotEmpty, MinLength } from 'class-validator'

import { 
    EMAIL_REQUIRED, 
    NAME_REQUIRED, 
    PASSWORD_REQUIRED, 
    PASSWORD_REQUIREMENTS, 
    REFRESH_TOKEN_REQUIRED 
} from 'statuses'

export class LoginRequest {
    @IsNotEmpty({ message: EMAIL_REQUIRED })
    readonly email: string

    @IsNotEmpty({ message: PASSWORD_REQUIRED })
    readonly password: string
}

export class RegisterRequest {
    @IsNotEmpty({ message: NAME_REQUIRED })
    readonly name: string

    @IsNotEmpty({ message: EMAIL_REQUIRED })
    readonly email: string

    @IsNotEmpty({ message: PASSWORD_REQUIRED })
    @MinLength(6, { message: PASSWORD_REQUIREMENTS })
    readonly password: string
}

export class RefreshRequest {
    @IsNotEmpty({ message: REFRESH_TOKEN_REQUIRED })
    readonly refresh_token: string
}