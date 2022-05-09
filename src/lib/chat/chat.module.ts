import { Module } from '@nestjs/common';
import { WsJwtStrategy } from '../auth/strategies/ws-jwt.strategy';
import { UserModule } from '../user/user.module';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [UserModule],
  providers: [ChatGateway, WsJwtStrategy],
})
export class ChatModule {}
