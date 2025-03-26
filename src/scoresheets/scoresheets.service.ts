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
        const scoresheet =
            this.scoresheetsRepository.create(createScoresheetDto);
        scoresheet.status = 0; // incomplete
        scoresheet.created_at = new Date();
        scoresheet.last_modified = new Date();
        return this.scoresheetsRepository.save(scoresheet);
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

    getRecentIncompleteScoresheet(archerId: number) {
        return this.scoresheetsRepository
            .createQueryBuilder('scoresheet')
            .where('scoresheet.archer_id = :archerId', { archerId })
            .andWhere('scoresheet.status = :status', { status: 'incomplete' })
            .orderBy('scoresheet.last_modified', 'DESC')
            .getOne();
    }

    async update(id: number, updateScoresheetDto: UpdateScoresheetDto) {
        const scoresheet = await this.scoresheetsRepository.findOne({
            where: { id: id },
        });
        const updatedScoresheet = this.scoresheetsRepository.merge(
            scoresheet,
            updateScoresheetDto,
        );

        // Update the last_modified field
        updatedScoresheet.last_modified = new Date();

        // Save the updated entity
        return this.scoresheetsRepository.save(updatedScoresheet);
    }

    remove(id: number) {
        return `This action removes a #${id} scoresheet`;
    }
}
