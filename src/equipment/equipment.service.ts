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
        equipment.last_modified = new Date();
        return this.equipmentRepository.save(equipment);
    }

    findAll() {
        return this.equipmentRepository.find();
    }

    async findEquipmentByArcherID(archerId: number, type: Array<string>) {
        const allEquipment = await this.equipmentRepository.find({
            where: { archer_id: archerId },
        });
        if (type === undefined) {
            return allEquipment;
        }
        return allEquipment.filter((equipment) =>
            type.includes(equipment.type),
        );
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
