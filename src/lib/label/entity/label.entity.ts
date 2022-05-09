import { ApiProperty } from '@nestjs/swagger';
import { Moment } from 'src/lib/moment/entity/moment.entity';
import { User } from 'src/lib/user/entity/user.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Label {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '标签' })
  @Column({ length: 100 })
  label: string;

  @ApiProperty({ description: 'create_time' })
  @CreateDateColumn({ type: 'timestamp', name: 'create_time' })
  createTime: Date;

  @ApiProperty({ description: 'update_time' })
  @UpdateDateColumn({ type: 'timestamp', name: 'update_time' })
  updateTime: Date;

  @ManyToMany((type) => Moment, (moment) => moment.labels)
  @JoinTable({
    name: 'label_moment',
    joinColumns: [{ name: 'label_id' }],
    inverseJoinColumns: [{ name: 'moment_id' }],
  })
  moments: Moment[];
}
