import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestPipe } from './pipe';
import { Config } from './enum/default';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //setup swagger docs
  const config = new DocumentBuilder()
    .setTitle('接口文档')
    .setDescription('这是文档注释')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new RequestPipe())
  await app.listen(Config.SERVER_PORT);
}

bootstrap();
