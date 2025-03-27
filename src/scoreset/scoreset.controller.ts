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
import { ScoresetService } from './scoreset.service';
import { CreateScoresetDto } from './dto/create-scoreset.dto';
import { UpdateScoresetDto } from './dto/update-scoreset.dto';

@Controller('scoreset')
export class ScoresetController {
    constructor(private readonly scoresetService: ScoresetService) {}

    @Post()
    create(@Body() createScoresetDto: CreateScoresetDto) {
        return this.scoresetService.create(createScoresetDto);
    }

    @Get()
    findAllScoresetsEachRound(
        @Query('scoresheetId') scoresheetId: string,
        @Query('roundSeq') roundSeq: string,
    ) {
        return this.scoresetService.getAllScoresetsByIdAndRound(
            +scoresheetId,
            +roundSeq,
        );
    }

    @Get('all')
    findAllScoresets(@Query('scoresheetId') scoresheetId: string) {
        return this.scoresetService.getAllScoresetsById(+scoresheetId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.scoresetService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateScoresetDto: UpdateScoresetDto,
    ) {
        return this.scoresetService.update(+id, updateScoresetDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.scoresetService.remove(+id);
    }
}
