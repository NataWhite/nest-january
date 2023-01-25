import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Car } from '../car/car.model';
import { Role } from '../role/role.model';
import { UserRoles } from '../role/user-role.model';
import { RoleService } from '../role/role.service';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Car, Role, UserRoles]),
    RoleModule,
  ],
  controllers: [UserController],
  providers: [UserService, RoleService],
  exports: [UserService],
})
export class UserModule {}
