import { DeepPartial } from 'typeorm';
import { bow, eyeSight, gender, recurveLevel } from '../entities/archer.entity';

export class CreateArcherDto {
    id?: number;
    name?: string;
    gender?: DeepPartial<gender>;
    eye?: DeepPartial<eyeSight>;
    bow?: DeepPartial<bow>;
    level?: DeepPartial<recurveLevel>;
}
