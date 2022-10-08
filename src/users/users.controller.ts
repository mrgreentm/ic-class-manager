/* eslint-disable prettier/prettier */  
import { UsersService } from './users.service';
import { UserInterface } from './interfaces/users.interface';
import { CreateUserDto } from './dtos/users.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<UserInterface> {
    return this.usersService.createUser(data);
  }
}
