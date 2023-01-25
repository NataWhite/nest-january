import {
  Body,
  Controller,
  Delete,
  Get, HttpCode,
  Param, Patch,
  Post,
  Put, UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UserService } from './user.service';
import {ApiBadRequestResponse, ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger';
import { User } from './user.model';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUsers() {
    return this.usersService.getAll();
  }

  @ApiBadRequestResponse({status: 400, type: 'Bad query param', })
  @ApiResponse({ status: 201, type: User })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @ApiQuery({ name: 'id', example: '1sfd-24f1234' })
  @Get('/:id')
  getOneUserById(@Param('id') id: string) {
    return `get user id ${id}`;
  }

  @Put('/:id')
  updateUser() {}

  @Delete('/:id')
  deleteUser() {}
}
