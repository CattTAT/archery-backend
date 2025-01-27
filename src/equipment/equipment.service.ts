import { Injectable } from '@nestjs/common';
import { Equipment } from './entities/equipment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';

@Injectable()
export class EquipmentService {
    constructor(
        @InjectRepository(Equipment)
        private equipmentRepository: Repository<Equipment>,
    ) {}

    create(createEquipmentDto: CreateEquipmentDto) {
        const equipment = this.equipmentRepository.create(createEquipmentDto);
        return this.equipmentRepository.save(equipment);
    }

    findAll() {
        return this.equipmentRepository.find();
    }

    findOne(id: number) {
        return this.equipmentRepository.findOneBy({ id });
    }

    update(id: number, updateEquipmentDto: UpdateEquipmentDto) {
        return this.equipmentRepository.update(id, updateEquipmentDto);
    }

    remove(id: number) {
        return this.equipmentRepository.delete(id);
    }
}
