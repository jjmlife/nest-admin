import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moment } from './entity/moment.entity';
import { MomentController } from './moment.controller';
import { MomentService } from './moment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Moment])],
  controllers: [MomentController],
  providers: [MomentService],
})
export class MomentModule {}
