import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './CONSTANTS/jwtConstants';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [
    SharedModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
