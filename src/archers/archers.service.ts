import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Archer } from './entities/archer.entity';
import { CreateArcherDto } from './dto/create-archer.dto';
import { UpdateArcherDto } from './dto/update-archer.dto';

@Injectable()
export class ArchersService {
    constructor(
        @InjectRepository(Archer)
        private archersRepository: Repository<Archer>,
    ) {}

    create(createArcherDto: CreateArcherDto) {
        const archer = this.archersRepository.create(createArcherDto);
        return this.archersRepository.save(archer);
    }

    findAll() {
        return this.archersRepository.find();
    }

    findOne(id: number) {
        return this.archersRepository.findOneBy({ id });
    }

    update(id: number, updateArcherDto: UpdateArcherDto) {
        return this.archersRepository.update(id, updateArcherDto);
    }

    remove(id: number) {
        return this.archersRepository.delete(id);
    }
}
