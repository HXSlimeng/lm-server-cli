import { Dependencies, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware'
import { DataSource } from 'typeorm'

import { TypeOrmModule } from '@nestjs/typeorm'
import { TpmWorkingLocalInfoModule } from './tpm_working_local_info/tpm_working_local_info.module';
import { TpmWorkingLocalInfo } from './tpm_working_local_info/entities/tpm_working_local_info.entity';

@Dependencies(DataSource)
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '10.10.1.45',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'twelve_mes',
    entities: [TpmWorkingLocalInfo]
  }), TpmWorkingLocalInfoModule],
})
export class AppModule implements NestModule {
  constructor() {
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: 'cats', method: RequestMethod.GET })
  }
}
