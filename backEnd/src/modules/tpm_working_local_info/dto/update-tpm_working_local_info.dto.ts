import { PartialType } from '@nestjs/mapped-types';
import { CreateTpmWorkingLocalInfoDto } from './create-tpm_working_local_info.dto';

export class UpdateTpmWorkingLocalInfoDto extends PartialType(CreateTpmWorkingLocalInfoDto) {}
