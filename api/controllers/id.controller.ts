import { Body, Controller, Get, Post, Put, Request } from '@nestjs/common';

import { IdService } from 'services/id.service';

@Controller('id')
export class IdController {
    public service: IdService = new IdService();

    @Post('sign-in')
    signIn(@Request() req) {
        
    }

    @Get()
    get(@Request() req) {
        return this.service.get(1);
    }

    @Put()
    put(@Request() req, @Body() data) {
        return this.service.update(1, data);
    }
}
