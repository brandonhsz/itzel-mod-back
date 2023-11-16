import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from '../shared/services/prisma/prisma.service';

@Injectable()
export class PatientService {
  constructor(private readonly PrismaService: PrismaService) {}

  async create(data: CreatePatientDto) {
    return await this.PrismaService.patient.create({ data });
  }

  async findAll(doctorId: number) {
    console.log(doctorId);
    return await this.PrismaService.patient.findMany({
      where: {
        doctorId,
      },
    });
  }

  async findOne(id: number) {
    return await this.PrismaService.patient.findUnique({ where: { id } });
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    return await this.PrismaService.patient.update({
      where: { id },
      data: updatePatientDto,
    });
  }

  async remove(id: number) {
    return await this.PrismaService.patient.delete({ where: { id } });
  }

  async cuestionario(body: any) {
    return await this.PrismaService.cuestionario.create({ data: body });
  }
}
