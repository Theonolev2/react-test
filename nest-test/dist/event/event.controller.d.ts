import { CreateEventDto } from './create-event.dto';
import { EventService } from './event.service';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(CreateEventDto: CreateEventDto): Promise<string>;
    findAll(): string;
    findOne(params: any): string;
    remove(id: string): string;
}
