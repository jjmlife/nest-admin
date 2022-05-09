import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entity/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<null | Omit<User, 'password'>> {
    const user = await this.userService.findByUsername(username);
    if (!user) {
      return null;
    }

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      return null;
    }
    const { password: ignorePass, ...restUser } = user;
    return restUser;
  }

  async login(user: User): Promise<any> {
    const { username, email, id, roles } = user;
    const payload = {
      username,
      email,
      id,
      roles,
    };
    const token = this.jwtService.sign(payload);
    return {
      token: token,
    };
  }
}
