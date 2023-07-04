import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestPipe } from './pipe';
import { Config } from './enum/default';
import * as fs from 'fs'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new RequestPipe())
  await app.listen(Config.SERVER_PORT);
}

bootstrap();
