import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CreateLocationDto } from './create-location.dto';

@Controller('location')
export class LocationController {
  @Post()
  async create(@Body() CreateLocationDto: CreateLocationDto): Promise<string> {
    console.log(CreateLocationDto);
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
