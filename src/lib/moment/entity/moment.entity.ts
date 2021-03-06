import { ApiProperty } from '@nestjs/swagger';
import { Label } from 'src/lib/label/entity/label.entity';
import { User } from 'src/lib/user/entity/user.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Moment {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '内容' })
  @Column({ length: 1000 })
  content: string;

  @ManyToOne((type) => User, (user) => user.moments)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ApiProperty({ description: 'create_time' })
  @CreateDateColumn({ type: 'timestamp', name: 'create_time' })
  createTime: Date;

  @ApiProperty({ description: 'update_time' })
  @UpdateDateColumn({ type: 'timestamp', name: 'update_time' })
  updateTime: Date;

  @ManyToMany((type) => Label, (label) => label.moments)
  labels: Label[];
}
