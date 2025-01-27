import {
    Controller,
    Get,
    Post,
    Delete,
    Param,
    Body,
    Patch,
} from '@nestjs/common';
import { ArchersService } from './archers.service';
import { CreateArcherDto } from './dto/create-archer.dto';
import { UpdateArcherDto } from './dto/update-archer.dto';

@Controller('archers')
export class ArchersController {
    constructor(private readonly archersService: ArchersService) {}

    @Post()
    create(@Body() createArcherDto: CreateArcherDto) {
        return this.archersService.create(createArcherDto);
    }

    @Get()
    findAll() {
        return this.archersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.archersService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateArcherDto: UpdateArcherDto) {
        return this.archersService.update(+id, updateArcherDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.archersService.remove(+id);
    }
}
