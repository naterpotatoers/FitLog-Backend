import { PartialType } from '@nestjs/swagger';
import { CreateWorkoutDto } from './create-workout.dto';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateWorkoutDto extends PartialType(CreateWorkoutDto) {
    @ApiProperty()
    id: string;
    
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    reps: number;
    
    @ApiProperty()
    sets: number;
    
    @ApiProperty()
    type: string;
    
    @ApiProperty()
    weight: number;
    
    @ApiProperty()
    updated_at: string;
}
