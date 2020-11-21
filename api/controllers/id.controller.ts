import { Controller, Get } from '@nestjs/common';
import { SController } from 'controller';

@Controller('/id')
export class IdController extends SController {
    @Get()
    get() {
    	return { test: true }
    }
}
