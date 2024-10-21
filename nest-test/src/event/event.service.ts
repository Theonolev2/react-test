import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async createEvent(name: string, date: number): Promise<Event> {
    const event = this.eventRepository.create({ name, date });
    return this.eventRepository.save(event);
  }

  async getAllEvents(): Promise<Event[]> {
    return this.eventRepository.find();
  }
}
