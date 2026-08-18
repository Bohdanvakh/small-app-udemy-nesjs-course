import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;

    constructor() {
        // service is creating its own dependencies
        // we don't do it in real apps, just in simple example of the cource
        this.messagesService = new MessagesService();
    }

    @Get()
    index() {
        return this.messagesService.findAll();
    }

    @Post()
    create(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content);
    }


    @Get('/:id')
    getMessage(@Param('id') id: string) {
        return this.messagesService.findOne(id);
    }
}
