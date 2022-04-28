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

    const user = new User();
    user.username = username;
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
