/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user/create-user.dto';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post()
  signup(@Body() CreateUserDto: CreateUserDto) {
    const { email, password, is_doctor } = CreateUserDto;
    return this.AuthService.signup({ email, password, is_doctor });
  }
}
