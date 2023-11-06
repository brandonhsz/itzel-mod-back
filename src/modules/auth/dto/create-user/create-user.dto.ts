import { IsBoolean, IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  @IsBoolean()
  is_doctor: boolean;
}
