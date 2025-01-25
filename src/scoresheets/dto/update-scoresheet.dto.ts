import { PartialType } from '@nestjs/mapped-types';
import { CreateScoresheetDto } from './create-scoresheet.dto';

export class UpdateScoresheetDto extends PartialType(CreateScoresheetDto) {}
