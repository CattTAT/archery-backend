import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateArrowDto } from './dto/create-arrow.dto';
import { UpdateArrowDto } from './dto/update-arrow.dto';
import { Arrow } from './entities/arrow.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ArrowsService {
    constructor(
        @InjectRepository(Arrow)
        private arrowsRepository: Repository<Arrow>,
    ) {}

    create(createArrowDto: CreateArrowDto) {
        return 'This action adds a new arrow';
    }

    findAll() {
        return this.arrowsRepository.find();
    }

    findOne(id: number) {
        return this.arrowsRepository.findOne({ where: { id: id } });
    }

    update(id: number, updateArrowDto: UpdateArrowDto) {
        return `This action updates a #${id} arrow`;
    }

    remove(id: number) {
        return `This action removes a #${id} arrow`;
    }
}
