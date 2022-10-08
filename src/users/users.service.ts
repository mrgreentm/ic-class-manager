/* eslint-disable prettier/prettier */
import { CreateUserDto } from './dtos/users.dto';
import { UserInterface } from './interfaces/users.interface';
import { UsersEntity } from './entities/users.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}
  async createUser(user: CreateUserDto): Promise<UserInterface> {
    try {
      const entity = Object.assign(new UsersEntity(), user);
      await this.usersRepository.save(entity);
      return entity;
    } catch (error) {
        console.log(error)
      throw new HttpException(
        { message: 'Não foi possível criar o usuário.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
