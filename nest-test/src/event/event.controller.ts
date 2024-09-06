import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';

@Controller('event')
export class EventController {
  @Post()
  async create(@Body() CreateEventDto: CreateEventDto): Promise<string> {
    console.log(CreateEventDto);
    return 'This action adds a new event';
  }

  @Get()
  findAll(): string {
    return 'This action returns all events';
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    return `This action returns a #${params.id} event`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} event`;
  }
}
