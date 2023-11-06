/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login/login.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post('/signup')
  signup(@Body() CreateUserDto: CreateUserDto) {
    const { email, password, is_doctor } = CreateUserDto;
    return this.AuthService.signUp({ email, password, is_doctor });
  }

  @Post('/signin')
  signin(@Body() LoginDto: LoginDto) {
    const { email, password } = LoginDto;
    return this.AuthService.signIn({ email, password });
  }

  @UseGuards(AuthGuard)
  @Get()
  auth() {
    return { message: 'You are authenticated' };
  }
}
