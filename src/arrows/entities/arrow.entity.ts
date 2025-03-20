import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Arrow {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    archer_id: number;

    @Column({ nullable: false })
    scoreset_id: number;

    @Column({
        type: 'enum',
        enum: ['M', 'X', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
        nullable: true,
    })
    score: number;

    @Column({ type: 'float', nullable: true })
    x_axis: number;

    @Column({ type: 'float', nullable: true })
    y_axis: number;

    @Column()
    arrow_seq: number;
}

export type score =
    | 'M'
    | 'X'
    | '10'
    | '9'
    | '8'
    | '7'
    | '6'
    | '5'
    | '4'
    | '3'
    | '2'
    | '1';
