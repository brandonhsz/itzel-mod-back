import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePatientDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  doctorId: number;

  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  age: number;

  @IsString()
  @IsOptional()
  phone: string;

  @IsString()
  @IsOptional()
  weight: number;
}
