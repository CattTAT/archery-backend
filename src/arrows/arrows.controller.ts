import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
} from '@nestjs/common';
import { ArrowsService } from './arrows.service';
import { CreateArrowDto } from './dto/create-arrow.dto';
import { UpdateArrowDto } from './dto/update-arrow.dto';

@Controller('arrows')
export class ArrowsController {
    constructor(private readonly arrowsService: ArrowsService) {}

    @Post()
    create(@Body() createArrowDto: CreateArrowDto) {
        return this.arrowsService.create(createArrowDto);
    }

    @Get()
    findAllScoresheetsArrows(@Query('scoresetId') scoresetId: string, @Query('archerId') archerId: string) {
        if (archerId) {
            return this.arrowsService.getAllArrowsByArcherId(+archerId);
        }
        return this.arrowsService.getAllArrowsByScoresetId(+scoresetId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.arrowsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateArrowDto: UpdateArrowDto) {
        return this.arrowsService.update(+id, updateArrowDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.arrowsService.remove(+id);
    }
}
