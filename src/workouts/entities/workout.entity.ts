import { IsIn, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class WorkoutEntity {
    @IsString()
    @IsNotEmpty()
    @PrimaryColumn()
    id: string;

    @IsString()
    @IsNotEmpty()
    @Column()
    name: string;

    @IsInt()
    @Column()
    reps: number;

    @IsInt()
    @Column()
    sets: number;

    @IsString()
    @IsNotEmpty()
    @Column()
    type: string;

    @IsInt()
    @Column()
    weight: number;

    @IsString()
    @IsNotEmpty()
    @Column()
    updated_at: string;

    @IsString()
    @IsNotEmpty()
    @Column()
    created_at: string;
}
