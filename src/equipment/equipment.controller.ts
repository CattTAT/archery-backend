import {
    Controller,
    Get,
    Post,
    Delete,
    Param,
    Body,
    Patch,
} from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';

@Controller('equipment')
export class EquipmentController {
    constructor(private readonly equipmentService: EquipmentService) {}
    @Get()
    findAll() {
        return this.equipmentService.findAll();
    }
    @Get(':id')
    get(@Param('id') id: string) {
        return this.equipmentService.findOne(+id);
    }
    @Post()
    create(@Body() createEquipmentDto: CreateEquipmentDto) {
        return this.equipmentService.create(createEquipmentDto);
    }
    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateEquipmentDto: UpdateEquipmentDto,
    ) {
        return this.equipmentService.update(+id, updateEquipmentDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.equipmentService.remove(+id);
    }
}
