import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsModule } from './modules';
import { LoggerMiddleware } from './middleware/logger.middleware'

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: 'cats', method: RequestMethod.GET })
  }
}
