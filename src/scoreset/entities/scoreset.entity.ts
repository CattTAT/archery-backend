import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Scoreset {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    scoresheet_id: number;

    @Column({ nullable: false })
    round_seq: number;

    @Column({ nullable: false })
    set_seq: number;
}
