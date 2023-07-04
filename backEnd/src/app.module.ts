import { Dependencies, MiddlewareConsumer, Module, NestModule, RequestMethod, UseGuards } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware'
import { DataSource } from 'typeorm'

import { TypeOrmModule } from '@nestjs/typeorm'
import { TpmWorkingLocalInfoModule, AuthModule, UserModule } from './modules';

import { Config } from './enum/default';
import { AuthGuard } from './guards/auth.guard';

@Dependencies(DataSource)
// @UseGuards(AuthGuard)
@Module({
  imports: [TypeOrmModule.forRoot({
    type: Config.DB_TYPE,
    host: Config.DB_HOST as string,
    port: Config.DB_PORT as number,
    username: Config.DB_USERNAME as string,
    password: Config.DB_PASSWORD as string,
    database: Config.DB_DATABASE as string,
    entities: ['./**/*.entity.js']
  }), TpmWorkingLocalInfoModule, AuthModule, UserModule]
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
