import { Injectable } from '@nestjs/common';
import { Equipment } from './equipment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EquipmentService {
    constructor(
        @InjectRepository(Equipment)
        private equipmentRepository: Repository<Equipment>,
    ) {}

    findAll(): Promise<Equipment[]> {
        return this.equipmentRepository.find();
    }
    findOne(id: number): Promise<Equipment> {
        return this.equipmentRepository.findOne({ where: { id: id } });
    }
    async remove(id: number): Promise<void> {
        await this.equipmentRepository.delete(id);
    }
    async create(equipment: Equipment): Promise<Equipment> {
        return this.equipmentRepository.save(equipment);
    }
    async update(equipment: Equipment): Promise<Equipment> {
        return this.equipmentRepository.save(equipment);
    }
}
