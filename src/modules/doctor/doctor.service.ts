import { Injectable } from '@nestjs/common';

@Injectable()
export class DoctorService {
  async getPatientList() {
    return 'patient list';
  }
}
