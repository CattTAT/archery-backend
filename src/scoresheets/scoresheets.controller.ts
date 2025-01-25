import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScoresheetsService } from './scoresheets.service';
import { CreateScoresheetDto } from './dto/create-scoresheet.dto';
import { UpdateScoresheetDto } from './dto/update-scoresheet.dto';

@Controller('scoresheets')
export class ScoresheetsController {
  constructor(private readonly scoresheetsService: ScoresheetsService) {}

  @Post()
  create(@Body() createScoresheetDto: CreateScoresheetDto) {
    return this.scoresheetsService.create(createScoresheetDto);
  }

  @Get()
  findAll() {
    return this.scoresheetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scoresheetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScoresheetDto: UpdateScoresheetDto) {
    return this.scoresheetsService.update(+id, updateScoresheetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scoresheetsService.remove(+id);
  }
}
