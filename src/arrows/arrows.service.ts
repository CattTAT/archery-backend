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
        return this.arrowsRepository.save(createArrowDto);
    }

    findAll() {
        return this.arrowsRepository.find();
    }

    getAllArrowsByScoresetId(scoresetId: number) {
        return this.arrowsRepository.find({
            where: { scoreset_id: scoresetId },
        });
    }
    
    getAllArrowsByArcherId(archerId: number) {
        return this.arrowsRepository.find({
            where: { archer_id: archerId },
        });
    }
    
    findOne(id: number) {
        return this.arrowsRepository.findOne({ where: { id: id } });
    }

    update(id: number, updateArrowDto: UpdateArrowDto) {
        return this.arrowsRepository.update(id, updateArrowDto);
    }

    remove(id: number) {
        return this.arrowsRepository.delete(id);
    }
}
