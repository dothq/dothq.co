import { Controller, Get } from '@nestjs/common';

import { AppService } from 'services/app.service';

@Controller()
export class AppController {
    public service: AppService = new AppService();

    @Get()
    get() {
    	return this.service.getInfo();
    }
}
