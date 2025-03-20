import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Archer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'enum', enum: ['female', 'male'] })
    gender: gender;

    @Column({ type: 'enum', enum: ['recurve', 'compound'] })
    bow: bow;

    @Column({ type: 'enum', enum: ['left', 'right'] })
    eye: eyeSight;

    @Column({
        type: 'enum',
        enum: ['novice', 'elementary', 'intermediate', 'advance'],
    })
    level: recurveLevel;
}

export type eyeSight = 'left' | 'right';

export type gender = 'female' | 'male';

export type bow = 'recurve' | 'compound';

export type recurveLevel = 'novice' | 'elementary' | 'intermediate' | 'advance';
