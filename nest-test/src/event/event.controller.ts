import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body() CreateEventDto: CreateEventDto): Promise<string> {
    this.eventService.createEvent(CreateEventDto.name, CreateEventDto.date);
    return 'This action creates all events';
  }

  @Get()
  findAll(): string {
    const events = this.eventService.getAllEvents();
    console.log(events);
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
