import { DeepPartial } from 'typeorm';
import { equipmentType } from '../entities/equipment.entity';

export class CreateEquipmentDto {
    archer_id?: number;
    name: string;
    type: DeepPartial<equipmentType>;
    measurements?: string;
}
