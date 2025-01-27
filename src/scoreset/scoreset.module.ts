import { Module } from '@nestjs/common';
import { ScoresetService } from './scoreset.service';
import { ScoresetController } from './scoreset.controller';
import { Scoreset } from './entities/scoreset.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Scoreset])],
    controllers: [ScoresetController],
    providers: [ScoresetService],
})
export class ScoresetModule {}
