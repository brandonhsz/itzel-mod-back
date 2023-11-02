import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { PrismaService } from './core/services/prisma/prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
