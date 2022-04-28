import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import loadConfig from './config/config';

import { User } from './lib/user/entity/user.entity';
import { UserModule } from './lib/user/user.module';
import { MomentModule } from './lib/moment/moment.module';

const configModule = ConfigModule.forRoot({
  load: [loadConfig],
  envFilePath: ['.env'],
});

const typeormModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const { host, port, username, password, database } =
      configService.get('db');

    return {
      type: 'mysql',
      host,
      port,
      username,
      password,
      database,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      // entities: [User],
      synchronize: true,
    };
  },
});

@Module({
  imports: [configModule, typeormModule, UserModule, MomentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
