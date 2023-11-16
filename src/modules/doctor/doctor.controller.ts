/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController {
  constructor(private DoctorService: DoctorService) {}

  @UseGuards(AuthGuard)
  @Get('patient-list')
  getPatientList() {
    return this.DoctorService.getPatientList();
  }
}
