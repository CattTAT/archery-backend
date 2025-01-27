import { PartialType } from '@nestjs/mapped-types';
import { CreateScoresetDto } from './create-scoreset.dto';

export class UpdateScoresetDto extends PartialType(CreateScoresetDto) {}
