import { Repository } from 'typeorm';
import { Event } from './event.entity';
export declare class EventService {
    private readonly eventRepository;
    constructor(eventRepository: Repository<Event>);
    createEvent(name: string, date: number): Promise<Event>;
    getAllEvents(): Promise<Event[]>;
}
