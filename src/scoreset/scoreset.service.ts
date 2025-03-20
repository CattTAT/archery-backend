import { Injectable } from '@nestjs/common';
import { CreateScoresetDto } from './dto/create-scoreset.dto';
import { UpdateScoresetDto } from './dto/update-scoreset.dto';
import { Scoreset } from './entities/scoreset.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { log } from 'console';

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

    getAllScoresetsByIdAndRound(scoresheetId: number, roundSeq: number) {
        log(
            `ScoresetService.getAllScoresetsByIdAndRound(${scoresheetId}, ${roundSeq})`,
        );
        return this.scoresetRepository.find({
            where: { scoresheet_id: scoresheetId, round_seq: roundSeq },
        });
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
