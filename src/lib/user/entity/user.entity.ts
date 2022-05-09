import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { Moment } from 'src/lib/moment/entity/moment.entity';

// @Entity('sys_user')
@Entity()
export class User {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'username' })
  @Column({ length: 100, nullable: false, unique: true })
  username: string;

  @ApiProperty({ description: 'password' })
  @Column({ length: 100, nullable: false })
  password: string;

  @ApiProperty({ description: 'email' })
  @Column({ length: 100, nullable: false })
  email: string;

  @ApiProperty({ description: 'roles' })
  @Column({
    type: 'tinyint',
    default: 2,
    comment: '1- admin, 2- operator',
  })
  roles: number;

  @ApiProperty({ description: 'create_time' })
  @CreateDateColumn({ type: 'timestamp', name: 'create_time' })
  createTime: Date;

  @ApiProperty({ description: 'update_time' })
  @UpdateDateColumn({ type: 'timestamp', name: 'update_time' })
  updateTime: Date;

  /// soft delete
  @Column({
    type: 'tinyint',
    name: 'is_delete',
    default: 1,
    comment: '0 - soft delete , 1-',
  })
  isDelete: number;

  @OneToMany((type) => Moment, (moment) => moment.user)
  moments: Moment[];

  @BeforeInsert()
  private async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
}
