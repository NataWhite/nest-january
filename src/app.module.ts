import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import { UserService } from './user/user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import * as process from "process";
import {User} from "./user/user.model";
import { RoleModule } from './role/role.module';
import {Car} from "./car/car.model";
import {Role} from "./role/role.model";
import {UserRoles} from "./role/user-role.model";

@Module({
  imports: [
    UserModule,
    CarModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_NAME,
      models: [User, Car, Role, UserRoles],
      // autoLoadModels: true,
    }),
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
