import { Test, TestingModule } from '@nestjs/testing';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';

describe('PatientController', () => {
  let controller: PatientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SharedModule, AuthModule],
      controllers: [PatientController],
      providers: [PatientService],
    }).compile();

    controller = module.get<PatientController>(PatientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
