import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { CreateUserSchema } from 'schemas/id.schema';
import { IdService } from 'services/id.service';

@Controller('id')
export class IdController {
    public service: IdService = new IdService();

    @Get(':id')
    get(@Param('id') id: number) {
        return this.service.get(id);
    }

    @Post()
    post(@Body() body: CreateUserSchema) {
        return this.service.create(body);
    }

    @Put(':id')
    put(@Param('id') id: number, @Body() data: Partial<CreateUserSchema>) {
        return this.service.update(id, data);
    }
}
