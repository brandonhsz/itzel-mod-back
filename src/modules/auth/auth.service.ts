/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/services/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly PrismaService: PrismaService) {}
  async signup(data: CreateUserDto) {
    return this.PrismaService.user.create({ data });
  }
}
