import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SController } from 'controller';

import { CreateUserSchema } from 'schemas/id.schema';

@Controller('id')
export class IdController extends SController {
    @Get(':id')
    get(@Param('id') id: number) {
        return this.services.id.get(id);
    }

    @Post()
    post(@Body() body: CreateUserSchema) {
        return this.services.id.create(body);
    }

    @Put(':id')
    put(@Param('id') id: number, @Body() data: Partial<CreateUserSchema>) {
        return this.services.id.update(id, data);
    }
}
