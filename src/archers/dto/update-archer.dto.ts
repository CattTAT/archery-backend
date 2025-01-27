import { PartialType } from '@nestjs/mapped-types';
import { CreateArcherDto } from './create-archer.dto';

export class UpdateArcherDto extends PartialType(CreateArcherDto) {}
