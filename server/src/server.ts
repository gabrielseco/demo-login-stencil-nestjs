import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './modules/app/app.module';
import * as express from 'express';
import * as cors from 'cors';

require('dotenv').config();

function addMiddleware(instance): void {
  instance.use(cors());
}

function setUpExpress(): void {
  const instance = express();
  addMiddleware(instance);
  return instance;
}

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, setUpExpress());
  const options = new DocumentBuilder()
    .setTitle('Login example')
    .setDescription('The login API')
    .setVersion('1.0')
    .addTag('login')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/swagger', app, document);
  await app.listen(3000);
}
bootstrap();
