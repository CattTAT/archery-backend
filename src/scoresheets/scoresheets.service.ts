import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateScoresheetDto } from './dto/create-scoresheet.dto';
import { UpdateScoresheetDto } from './dto/update-scoresheet.dto';
import { Scoresheet } from './entities/scoresheet.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ScoresheetsService {
    constructor(
        @InjectRepository(Scoresheet)
        private scoresheetsRepository: Repository<Scoresheet>,
    ) {}

    create(createScoresheetDto: CreateScoresheetDto) {
        return 'This action adds a new scoresheet';
    }

    findAll() {
        return this.scoresheetsRepository.find();
    }

    findOne(id: number) {
        return this.scoresheetsRepository.findOne({ where: { id: id } });
    }

    update(id: number, updateScoresheetDto: UpdateScoresheetDto) {
        return `This action updates a #${id} scoresheet`;
    }

    remove(id: number) {
        return `This action removes a #${id} scoresheet`;
    }
}
