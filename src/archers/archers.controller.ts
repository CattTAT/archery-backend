import {
    Controller,
    Get,
    Post,
    Delete,
    Param,
    Body,
    Put,
} from '@nestjs/common';
import { ArchersService } from './archers.service';
import { Archer } from './archer.entity';

@Controller('archers')
export class ArchersController {
    constructor(private readonly archersService: ArchersService) {}
    @Get()
    getAll(): Promise<Archer[]> {
        return this.archersService.findAll();
    }
    @Get(':id')
    get(@Param('id') id: number): Promise<Archer> {
        return this.archersService.findOne(id);
    }
    @Post()
    create(@Body() archer: Archer): Promise<Archer> {
        return this.archersService.create(archer);
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() archer: Archer): Promise<Archer> {
        archer.id = Number(id);
        return this.archersService.update(archer);
    }
    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.archersService.remove(id);
    }
}
