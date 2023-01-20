import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { ApiBadRequestResponse, ApiResponse } from '@nestjs/swagger';
import { User } from '../user/user.model';
import { RoleDto } from './dto/role.dto';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @ApiBadRequestResponse({ status: 400, type: 'Bad query param' })
  @ApiResponse({ status: 201, type: User })
  @Post()
  createNewRole(@Body() body: RoleDto) {
    return this.roleService.creteRole(body);
  }

  @Get()
  getAllRoles() {
    return this.roleService.getRoles();
  }
}
