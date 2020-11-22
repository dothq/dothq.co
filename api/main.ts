import { BadRequestException, Module, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import controllers from 'controllers';
import imports from 'imports';
import services from 'services';

import { IdService } from 'services/id.service';

@Module({
	imports: [...imports],
	exports: [IdService],
	controllers: [...controllers],
	providers: [...services]
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
