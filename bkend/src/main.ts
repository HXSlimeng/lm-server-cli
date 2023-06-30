import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestPipe } from './pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new RequestPipe())
  await app.listen(3000);
}
bootstrap();
