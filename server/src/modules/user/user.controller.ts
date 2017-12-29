import { Controller, Get, Post, HttpStatus, Body } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { UsersService } from './user.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { MESSAGES } from '../../core/messages';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, description: MESSAGES.USER.CREATED})
  async create(@Body() createUserDto: CreateUserDto) {
    console.log('body', createUserDto);
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, description: MESSAGES.USER.FOUND})
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}