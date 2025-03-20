import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Scoresheet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    archer_id: number;

    @Column()
    name: string;

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

    @Column()
    status: number;

    @Column({ nullable: true })
    created_at: Date;

    @Column({ nullable: true })
    last_modified: Date;
}
