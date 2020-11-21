import { Module } from '@nestjs/common';

import { AppController } from 'app.controller';
import { IdController } from 'controllers/id.controller';

import { AppService, IdService } from 'services';

@Module({
	imports: [],
    controllers: [AppController, IdController],
    providers: [AppService, IdService]
})
export class AppModule {}