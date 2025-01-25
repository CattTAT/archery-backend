import { Module } from '@nestjs/common';
import { ArrowsService } from './arrows.service';
import { ArrowsController } from './arrows.controller';
import { Arrow } from './entities/arrow.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Arrow])],
    controllers: [ArrowsController],
    providers: [ArrowsService],
})
export class ArrowsModule {}
