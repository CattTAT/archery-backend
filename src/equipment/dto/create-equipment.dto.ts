import { IsNotEmpty, IsEnum, IsObject, IsNumber } from 'class-validator';
import { equipmentType } from '../entities/equipment.entity';

export class CreateEquipmentDto {
    @IsNotEmpty()
    @IsNumber()
    archer_id: number;

    @IsNotEmpty()
    @IsEnum(['bow', 'arrows', 'sight'])
    type: equipmentType;

    @IsObject()
    measurements: { [key: string]: string };
}
