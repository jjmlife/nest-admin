import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from '../user/entity/user.entity';
import { UserService } from '../user/user.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    loginDto: LoginUserDto,
  ): Promise<null | Omit<User, 'password'>> {
    const user = await this.userService.findByUsername(loginDto.username);
    if (!user) {
      return null;
    }
    const isMatch = user.password === loginDto.password;
    if (!isMatch) {
      return null;
    }
    const { password: ignorePass, ...restUser } = user;
    return restUser;
  }

  async login(loginDto: LoginUserDto) {
    /// sql
    /// token
  }
}
