import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Car } from '../car/car.model';
import { Role } from '../role/role.model';
import { UserRoles } from '../role/user-role.model';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Olia',
    required: false,
  })
  @Column({ type: DataType.STRING, allowNull: true })
  firstName: string;

  @ApiProperty({
    example: 'Smith',
    required: false,
  })
  @Column({ type: DataType.STRING, allowNull: false })
  surName: string;

  @ApiProperty({
    example: 'female',
    required: false,
  })
  @Column({ type: DataType.STRING, allowNull: true })
  gender: string;

  @ApiProperty({
    example: 24,
    required: false,
  })
  @Column({ type: DataType.INTEGER, allowNull: true })
  age: number;

  @ApiProperty({
    example: 'Lviv',
    required: false,
  })
  @Column({ type: DataType.STRING, allowNull: true })
  city: string;

  @ApiProperty()
  @Column({ type: DataType.BOOLEAN, allowNull: true })
  isConfirm: boolean;

  @ApiProperty()
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty()
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @HasMany(() => Car)
  cars: Car[];

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
