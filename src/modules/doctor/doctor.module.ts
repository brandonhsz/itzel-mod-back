import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}
