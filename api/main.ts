import { BadRequestException, Module, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import controllers from 'controllers';
import imports from 'imports';

import { AppService } from 'modules/app.service';
import { UsersService } from 'modules/users/users.service';

@Module({
	imports: [...imports],
	controllers: [...controllers],
	providers: [
		AppService,
		UsersService
	]
})
export class AppModule {}

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule);
	
	app.useGlobalPipes(new ValidationPipe({
		exceptionFactory: (errors) => new BadRequestException(errors),
	}));
	app.setGlobalPrefix('api');

	await app.listen(4000);
}

bootstrap();
