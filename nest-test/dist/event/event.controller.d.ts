import { CreateEventDto } from './create-event.dto';
export declare class EventController {
    create(CreateEventDto: CreateEventDto): Promise<string>;
    findAll(): string;
    findOne(params: any): string;
    remove(id: string): string;
}
