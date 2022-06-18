import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { WorkoutEntity } from './entities/workout.entity'

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectRepository(WorkoutEntity)
    private repository: Repository<WorkoutEntity>,
  ) { }

  create(createWorkoutDto: CreateWorkoutDto) {
    const workout = new WorkoutEntity();
    workout.id = createWorkoutDto.id;
    workout.name = createWorkoutDto.name;
    workout.reps = createWorkoutDto.reps;
    workout.sets = createWorkoutDto.sets;
    workout.weight = createWorkoutDto.weight;
    workout.type = createWorkoutDto.type;
    workout.updated_at = createWorkoutDto.updated_at;
    workout.created_at = createWorkoutDto.created_at;

    return this.repository.save(workout);
  }

  findAll() {
    return this.repository.find({
      order: {
        created_at: "DESC"
      },
      take: 100
    });
  }

  findAllByName(name: string) {
    return this.repository.find({
      where: {
        name: name
      },
      order: {
        created_at: "DESC"
      }
    });
  }

  findOneById(id: string) {
    return this.repository.findOne(id);
  }

  async update(id: string, updateWorkoutDto: UpdateWorkoutDto) {
    const workout = await this.findOneById(id);
    workout.name = updateWorkoutDto.name;
    workout.reps = updateWorkoutDto.reps;
    workout.sets = updateWorkoutDto.sets;
    workout.weight = updateWorkoutDto.weight;
    workout.type = updateWorkoutDto.type;
    workout.updated_at = updateWorkoutDto.updated_at;
    return await this.repository.update(id, workout);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
