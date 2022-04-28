import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

export class BaseModel {
  @ApiProperty({ description: 'create_time' })
  @CreateDateColumn({ type: 'timestamp', name: 'create_time' })
  createTime: Date;

  @ApiProperty({ description: 'update_time' })
  @UpdateDateColumn({ type: 'timestamp', name: 'update_time' })
  updateTime: Date;
}
