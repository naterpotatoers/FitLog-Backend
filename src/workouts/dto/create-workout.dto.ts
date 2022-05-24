import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkoutDto {
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
    
    @ApiProperty()
    created_at: string;
}
