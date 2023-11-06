import {
  IsEmail,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePatientDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsNumber()
  weight: number;

  @IsString()
  @MaxLength(10)
  @MinLength(10)
  phone: string;
}
