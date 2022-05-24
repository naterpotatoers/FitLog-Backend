import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkoutsService } from './workouts.service';
import { WorkoutsController } from './workouts.controller';
import {WorkoutEntity} from './entities/workout.entity'

@Module({
  imports: [TypeOrmModule.forFeature([WorkoutEntity])],
  exports: [TypeOrmModule],
  controllers: [WorkoutsController],
  providers: [WorkoutsService]
})
export class WorkoutsModule {}
