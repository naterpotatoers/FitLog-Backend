import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutEntity } from './workouts/entities/workout.entity';
import { WorkoutsModule } from './workouts/workouts.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WorkoutsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.AWS_RDS_HOST,
      port: 3306,
      username: process.env.AWS_RDS_USERNAME,
      password: process.env.AWS_RDS_PASSWORD,
      database: process.env.AWS_RDS_DATABASE,
      entities: [WorkoutEntity],
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
