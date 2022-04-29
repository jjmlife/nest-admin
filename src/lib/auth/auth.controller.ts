import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SkipJwtAuth } from './constants';
import { LoginUserDto } from './dto/login-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('auth 模块')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  async register() {}

  @ApiOperation({ summary: 'loign' })
  @ApiBody({ type: LoginUserDto })
  @SkipJwtAuth()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  @Post('logout')
  async logout() {}
}
