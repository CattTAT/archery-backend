import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Equipment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    archer_id: number;

    @Column({ type: 'enum', enum: ['bow', 'arrows', 'sight'] })
    type: equipmentType;

    @Column({ type: 'simple-json', nullable: true })
    measurements: { [key: string]: string };
}

export type equipmentType = 'bow' | 'arrows' | 'sight';
