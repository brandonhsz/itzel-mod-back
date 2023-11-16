import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user/create-user.dto';
import { LoginDto } from './dto/login/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  token: string;
  constructor(
    private readonly PrismaService: PrismaService,
    private readonly JwtService: JwtService,
  ) {}

  async signUp(data: CreateUserDto) {
    return this.PrismaService.user.create({ data });
  }

  async signIn(data: LoginDto) {
    const user = await this.PrismaService.user.findUnique({
      where: { email: data.email },
    });
    if (user.password !== data.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, username: user.email };

    return {
      access_token: this.JwtService.sign(payload),
    };
  }
}
