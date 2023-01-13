import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Length(2)
  surName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsNumber()
  @Min(16)
  age: number;

  @IsString()
  @IsOptional()
  city: string;

  @IsBoolean()
  @IsOptional()
  isConfirm: boolean;
}
