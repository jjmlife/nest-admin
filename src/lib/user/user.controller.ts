import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@ApiTags('user 模块')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'create' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ type: User })
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('create')
  async create(@Req() req, @Body() userDto: CreateUserDto) {
    // console.log('create ', req.user, userDto);
    return await this.userService.create(userDto);
  }

  @Post('query')
  async query() {}

  @Post('detail')
  async detail() {}

  @Post('update')
  async update() {}

  @Post('remove')
  async remove() {}
}
