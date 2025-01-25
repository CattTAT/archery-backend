import { PartialType } from '@nestjs/mapped-types';
import { CreateArrowDto } from './create-arrow.dto';

export class UpdateArrowDto extends PartialType(CreateArrowDto) {}
