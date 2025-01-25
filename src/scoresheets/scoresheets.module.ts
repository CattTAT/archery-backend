import { Module } from '@nestjs/common';
import { ScoresheetsService } from './scoresheets.service';
import { ScoresheetsController } from './scoresheets.controller';
import { Scoresheet } from './entities/scoresheet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Scoresheet])],
    controllers: [ScoresheetsController],
    providers: [ScoresheetsService],
})
export class ScoresheetsModule {}
