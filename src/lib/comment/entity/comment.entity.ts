import { ApiProperty } from '@nestjs/swagger';
import { Moment } from 'src/lib/moment/entity/moment.entity';
import { User } from 'src/lib/user/entity/user.entity';

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

@Entity()
export class Comment {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '评论内容' })
  @Column({ length: 1000 })
  content: string;

  @OneToOne(() => Moment)
  @JoinColumn({ name: 'moment_id' })
  moment: Moment;

  // @OneToOne(() => Comment)
  // @JoinColumn({ name: 'comment_id' })
  // @Column({ nullable: true })
  // comment: Comment;

  @ApiProperty({ description: 'create_time' })
  @CreateDateColumn({ type: 'timestamp', name: 'create_time' })
  createTime: Date;

  @ApiProperty({ description: 'update_time' })
  @UpdateDateColumn({ type: 'timestamp', name: 'update_time' })
  updateTime: Date;
}
