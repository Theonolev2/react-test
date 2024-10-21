import { CreateLocationDto } from './create-location.dto';
export declare class LocationController {
    create(CreateLocationDto: CreateLocationDto): Promise<string>;
    findAll(): string;
    findOne(params: any): string;
    remove(id: string): string;
}
