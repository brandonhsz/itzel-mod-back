import { DoctorModule } from './modules/doctor/doctor.module';
import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { PatientModule } from './modules/patient/patient.module';

@Module({
  imports: [DoctorModule, SharedModule, AuthModule, PatientModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
