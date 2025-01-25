import {
    Controller,
    Get,
    Post,
    Delete,
    Param,
    Body,
    Put,
} from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { Equipment } from './equipment.entity';

@Controller('equipment')
export class EquipmentController {
    constructor(private readonly equipmentService: EquipmentService) {}
    @Get()
    getAll(): Promise<Equipment[]> {
        return this.equipmentService.findAll();
    }
    @Get(':id')
    get(@Param('id') id: number): Promise<Equipment> {
        return this.equipmentService.findOne(id);
    }
    @Post()
    create(@Body() equipment: Equipment): Promise<Equipment> {
        return this.equipmentService.create(equipment);
    }
    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() equipment: Equipment,
    ): Promise<Equipment> {
        equipment.id = Number(id);
        return this.equipmentService.update(equipment);
    }
    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.equipmentService.remove(id);
    }
}
