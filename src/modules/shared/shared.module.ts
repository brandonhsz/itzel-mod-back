/*
https://docs.nestjs.com/modules
*/

import { Logger, Module } from '@nestjs/common';
import { PrismaService } from './services/prisma/prisma.service';

@Module({
  providers: [PrismaService, Logger],
  exports: [PrismaService],
})
export class SharedModule {}
