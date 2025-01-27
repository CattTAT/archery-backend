import { Injectable } from '@nestjs/common';
import { CreateScoresetDto } from './dto/create-scoreset.dto';
import { UpdateScoresetDto } from './dto/update-scoreset.dto';
import { Scoreset } from './entities/scoreset.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ScoresetService {
    constructor(
        @InjectRepository(Scoreset)
        private scoresetRepository: Repository<Scoreset>,
    ) {}

    create(createScoresetDto: CreateScoresetDto) {
        return this.scoresetRepository.save(createScoresetDto);
    }

    findAll() {
        return this.scoresetRepository.find();
    }

    findOne(id: number) {
        return this.scoresetRepository.findOne({ where: { id } });
    }

    update(id: number, updateScoresetDto: UpdateScoresetDto) {
        return this.scoresetRepository.update(id, updateScoresetDto);
    }

    remove(id: number) {
        return this.scoresetRepository.delete(id);
    }
}
