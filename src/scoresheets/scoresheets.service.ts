import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateScoresheetDto } from './dto/create-scoresheet.dto';
import { UpdateScoresheetDto } from './dto/update-scoresheet.dto';
import { Scoresheet } from './entities/scoresheet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { log } from 'console';

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

    getScoresheetsDistances(archerId: number) {
        return this.scoresheetsRepository
            .createQueryBuilder('scoresheet')
            .select('DISTINCT scoresheet.distance', 'distance')
            .where('scoresheet.archer_id = :archerId', { archerId })
            .getRawMany();
    }

    async getScoresheetsByArcherId(
        archerId: number,
        distance: string[],
        status: string[],
    ) {
        const scoresheets = await this.scoresheetsRepository.findBy({
            archer_id: archerId,
        });
        if (status === undefined || distance === undefined) {
            return scoresheets;
        }

        return scoresheets.filter(
            (scoresheet) =>
                distance.includes(scoresheet.distance.toString()) &&
                status.includes(scoresheet.status.toString()),
        );
    }

    update(id: number, updateScoresheetDto: UpdateScoresheetDto) {
        return `This action updates a #${id} scoresheet`;
    }

    remove(id: number) {
        return `This action removes a #${id} scoresheet`;
    }
}
