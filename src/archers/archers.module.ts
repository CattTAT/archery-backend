import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArchersService } from './archers.service';
import { ArchersController } from './archers.controller';
import { Archer } from './entities/archer.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Archer])],
    providers: [ArchersService],
    controllers: [ArchersController],
})
export class ArchersModule {}
