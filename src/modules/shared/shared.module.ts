/*
https://docs.nestjs.com/modules
*/

import { Logger, Module } from '@nestjs/common';
import { PrismaService } from './services/prisma/prisma.service';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  providers: [PrismaService, Logger, AuthGuard],
  exports: [PrismaService, AuthGuard],
})
export class SharedModule {}
