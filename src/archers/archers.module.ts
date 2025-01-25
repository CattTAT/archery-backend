import { Module } from '@nestjs/common';
import { ArchersService } from './archers.service';
import { ArchersController } from './archers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Archer } from './archer.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Archer])],
    providers: [ArchersService],
    controllers: [ArchersController],
})
export class ArchersModule {}
