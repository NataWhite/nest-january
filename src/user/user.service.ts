import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';

@Injectable()
export class UserService {
  private users = [];

  getAll() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push({
      ...user,
      id: new Date().valueOf(),
    });
    return this.users[0];
  }
}
