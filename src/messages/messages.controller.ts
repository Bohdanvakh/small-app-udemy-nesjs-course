import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    index() {
        
    }

    @Post()
    create(@Body() body: CreateMessageDto) {
        console.log(body);
    }


    @Get('/:id')
    getMessage(@Param('id') id: string) {
        console.log(id);
    }
}
