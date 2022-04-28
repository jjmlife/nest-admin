import { User } from 'src/lib/user/entity/user.entity';
import { Entity, EntityRepository, Repository } from 'typeorm';

export class UserRepo extends Repository<User> {}
