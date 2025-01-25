import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Scoresheet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    archer_id: number;

    @Column()
    distance: number;

    @Column()
    target_face: string;

    @Column()
    round: number;

    @Column()
    set: number;

    @Column()
    arrow_per_set: number;
}
