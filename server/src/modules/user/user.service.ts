import { MESSAGES } from './../../core/messages/index';
import { ResponseInterface } from './../../core/interfaces/index';
import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { Constants } from './../../constants';
import * as utils from './../../core/utils';

@Component()
export class UsersService {
  constructor(
    @Inject(Constants.UserRepositoryToken) private readonly userRepository: Repository<User>,
  ){}

  async create(createUserDto: CreateUserDto): Promise<ResponseInterface<User>> {
    const data = await this.userRepository.save<User>(createUserDto);
    return new Promise<ResponseInterface<User>>((resolve, rejected) => {
      resolve({
        message: MESSAGES.USER.CREATED,
        data: data,
      });
    });
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();

    const newUsers = utils.removeProperty(users, 'password');

    return new Promise<User[]>((resolve, rejected) => {
      resolve(newUsers);
    });
  }
}