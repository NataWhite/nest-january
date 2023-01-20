import { IsString } from 'class-validator';

export class RoleDto {
  @IsString()
  value: string;

  @IsString()
  description: string;
}
