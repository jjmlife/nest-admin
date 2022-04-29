import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepo } from 'src/db/repository/user.repo';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(userDto: CreateUserDto) {
    const { username, password, email } = userDto;

    /// 判断数据存在
    const isExist = await this.userRepo.count({
      where: { username },
    });

    console.log(isExist);
    if (isExist > 0) {
      return {
        error_code: 1000,
        msg: '用户已存在',
      };
    }

    const user = new User();
    user.username = username; /// 加密
    user.password = password;
    user.email = email;

    return await this.userRepo.save(user);
  }

  async findByUsername(username: string): Promise<User> {
    return await this.userRepo.findOne({ where: { username } });
  }

  // async update() {}

  // async query() {}

  // async detail() {}
}
