import { Module, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import controllers from 'controllers';
import services from 'services';

@Module({
	imports: [],
	controllers: [...controllers],
	providers: [...services]
})
export class AppModule {}

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule);
	
	app.useGlobalPipes(new ValidationPipe());

	await app.listen(4000);
}

bootstrap();
