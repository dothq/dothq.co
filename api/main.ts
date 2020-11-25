import { BadRequestException, Module, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

import controllers from 'controllers';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import imports from 'imports';

import { AppService } from 'modules/app.service';
import { AuthenticationModule } from 'modules/auth/auth.module';
import { RefreshTokensRepository } from 'modules/auth/refresh-tokens.repository';
import { TokensService } from 'modules/auth/tokens.service';
import { UsersModule } from 'modules/users/users.module';
import { UsersService } from 'modules/users/users.service';

@Module({
	imports: [
		...imports,
		UsersModule,
		AuthenticationModule,
	],
	controllers: [...controllers],
	providers: []
})
export class AppModule {}

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule);
	
	app.useGlobalPipes(new ValidationPipe());
	app.setGlobalPrefix('api');
	app.use(helmet());
	app.use(cookieParser());

	await app.listen(4000);
}

bootstrap();
