import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    index() {
        
    }

    @Post()
    create() {

    }


    @Get('/:id')
    getMessage() {

    }
}
