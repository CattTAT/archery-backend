import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Archer } from './archer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ArchersService {
    constructor(
        @InjectRepository(Archer)
        private archersRepository: Repository<Archer>,
    ) {}

    findAll(): Promise<Archer[]> {
        return this.archersRepository.find();
    }
    findOne(id: number): Promise<Archer> {
        return this.archersRepository.findOne({ where: { id: id } });
    }
    async remove(id: number): Promise<void> {
        await this.archersRepository.delete(id);
    }
    async create(archer: Archer): Promise<Archer> {
        return this.archersRepository.save(archer);
    }
    async update(archer: Archer): Promise<Archer> {
        return this.archersRepository.save(archer);
    }
}
