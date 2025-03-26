import { DeepPartial } from 'typeorm';
import { score } from '../entities/arrow.entity';

export class CreateArrowDto {
    scoreset_id?: number;
    archer_id?: number;
    arrow_seq?: number;
    score?: DeepPartial<score>;
    x_axis?: number;
    y_axis?: number;
}
