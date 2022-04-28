import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('auth 模块')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  async register() {}

  @ApiOperation({ summary: 'loign' })
  @ApiBody({ type: LoginUserDto })
  @UseGuards()
  @Post('login')
  async login(@Body() user: LoginUserDto) {
    return this.authService.login(user);
  }

  @Post('logout')
  async logout() {}
}
