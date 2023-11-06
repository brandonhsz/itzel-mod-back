import { Test, TestingModule } from '@nestjs/testing';
import { PatientService } from './patient.service';
import { SharedModule } from '../shared/shared.module';

describe('PatientService', () => {
  let service: PatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SharedModule],
      providers: [PatientService],
    }).compile();

    service = module.get<PatientService>(PatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
