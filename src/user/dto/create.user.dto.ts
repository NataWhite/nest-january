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
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    example: 'Olia',
    required: false,
  })
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty({
    example: 'Smith',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @Length(2)
  surName: string;

  @ApiProperty({
    example: 'female',
    required: false,
  })
  @IsString()
  @IsOptional()
  gender: string;

  @ApiProperty({
    example: 'Olia@mail.com',
    required: false,
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 23,
    required: false,
  })
  @IsNumber()
  @Min(16)
  age: number;

  @ApiProperty({
    example: 'Lviv',
    required: false,
  })
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty({
    example: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  isConfirm: boolean;

  @ApiProperty({
    example: 'qwerty12345',
    required: true,
  })
  @IsString()
  password: string;
}
