import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TpmWorkingLocalInfoService } from './tpm_working_local_info.service';
import { CreateTpmWorkingLocalInfoDto } from './dto/create-tpm_working_local_info.dto';
import { UpdateTpmWorkingLocalInfoDto } from './dto/update-tpm_working_local_info.dto';
import { TpmWorkingLocalInfo } from './entities/tpm_working_local_info.entity';
import { AuthGuard } from '../../guards/auth.guard'
import { RequestPipe } from 'src/pipe';

// @UseGuards(AuthGuard)
@Controller('tpmWorkingLocalInfo')
export class TpmWorkingLocalInfoController {
  constructor(private readonly tpmWorkingLocalInfoService: TpmWorkingLocalInfoService) { }

  @Post()
  create(@Body() createTpmWorkingLocalInfoDto: CreateTpmWorkingLocalInfoDto) {
    return this.tpmWorkingLocalInfoService.create(createTpmWorkingLocalInfoDto);
  }

  @Get()
  findAll() {
    return this.tpmWorkingLocalInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tpmWorkingLocalInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTpmWorkingLocalInfoDto: UpdateTpmWorkingLocalInfoDto) {
    return this.tpmWorkingLocalInfoService.update(+id, updateTpmWorkingLocalInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tpmWorkingLocalInfoService.remove(+id);
  }
}
