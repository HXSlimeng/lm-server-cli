import { Injectable } from '@nestjs/common';
import { CreateTpmWorkingLocalInfoDto } from './dto/create-tpm_working_local_info.dto';
import { UpdateTpmWorkingLocalInfoDto } from './dto/update-tpm_working_local_info.dto';
import { Repository } from 'typeorm';
import { TpmWorkingLocalInfo } from './entities/tpm_working_local_info.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TpmWorkingLocalInfoService {
  constructor(
    //Repository
    @InjectRepository(TpmWorkingLocalInfo)
    private readonly wklocalInfoRepo: Repository<TpmWorkingLocalInfo>) {
  }
  create(createTpmWorkingLocalInfoDto: CreateTpmWorkingLocalInfoDto) {
    return 'This action adds a new tpmWorkingLocalInfo';
  }

  findAll() {
    return this.wklocalInfoRepo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} tpmWorkingLocalInfo`;
  }

  update(id: number, updateTpmWorkingLocalInfoDto: UpdateTpmWorkingLocalInfoDto) {
    return `This action updates a #${id} tpmWorkingLocalInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} tpmWorkingLocalInfo`;
  }
}
