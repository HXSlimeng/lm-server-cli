import { Module } from '@nestjs/common';
import { TpmWorkingLocalInfoService } from './tpm_working_local_info.service';
import { TpmWorkingLocalInfoController } from './tpm_working_local_info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TpmWorkingLocalInfo } from './entities/tpm_working_local_info.entity';

@Module({
  controllers: [TpmWorkingLocalInfoController],
  providers: [TpmWorkingLocalInfoService],
  //Repository
  imports: [TypeOrmModule.forFeature([TpmWorkingLocalInfo])]
})
export class TpmWorkingLocalInfoModule { }
