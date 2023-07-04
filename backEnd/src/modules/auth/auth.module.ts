import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { Config } from 'src/enum/default';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UserModule, JwtModule.register({
    global: true,
    secret: Config.JWT_SESRET as const,
    signOptions: { expiresIn: '60s' }
  })],
  exports: [AuthService]
})
export class AuthModule { }
