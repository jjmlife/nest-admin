import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@ApiTags('user 模块')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'create' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ type: User })
  @Post('create')
  async create(@Body() userDto: CreateUserDto) {
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
