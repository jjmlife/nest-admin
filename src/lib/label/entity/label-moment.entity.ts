import { ApiProperty } from '@nestjs/swagger';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('label_moment')
export class LabelMoment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label_id: number;

  @Column()
  moment_id: number;

  @CreateDateColumn({ type: 'timestamp', name: 'create_time' })
  createTime: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'update_time' })
  updateTime: Date;
}
