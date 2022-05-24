import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { WorkoutsModule } from './workouts/workouts.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .setTitle('FitLog REST API')
    .setDescription('The backend for FitLog')
    .setVersion('1.0')
    .build();

  const swagger = SwaggerModule.createDocument(app, config, {
    include: [WorkoutsModule],
  });

  SwaggerModule.setup('/', app, swagger, {
    customSiteTitle: 'FitLog API',
  });
  await app.listen(5000);
  console.log(await app.getUrl());
}
bootstrap();
