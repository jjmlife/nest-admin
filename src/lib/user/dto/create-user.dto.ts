import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(14)
  username: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;

  @ApiProperty({ required: false, description: '邮箱' })
  @IsEmail()
  email: string;
}
