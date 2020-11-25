import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    get() {
    	return { statusCode: 200 }
    }
}
