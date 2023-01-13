import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}
  @Get()
  getAllUsers() {
    return this.usersService.getAll();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get('/:id')
  getOneUserById(@Param('id') id: string) {
    return `get user id ${id}`;
  }

  @Put('/:id')
  updateUser() {}

  @Delete('/:id')
  deleteUser() {

  }
}
