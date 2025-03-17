import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Equipment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    archer_id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ type: 'enum', enum: ['bow', 'arrows', 'sight'] })
    type: equipmentType;

    @Column({ nullable: true })
    measurements: string;

    @Column({ nullable: true })
    last_modified: Date;
}

export type equipmentType = 'bow' | 'arrows' | 'sight';
