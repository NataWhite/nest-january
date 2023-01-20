import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './role.model';
import { RoleDto } from './dto/role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role) private readonly roleRepository: typeof Role,
  ) {}

  async getRole(value: string) {
    return this.roleRepository.findOne({ where: { value } });
  }

  async getRoles() {
    return this.roleRepository.findAll();
  }

  async creteRole(dto: RoleDto) {
    return this.roleRepository.create(dto);
  }
}
