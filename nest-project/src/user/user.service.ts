import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const anonymousinstance = new User()
    anonymousinstance.name = createUserDto.name
    anonymousinstance.email = createUserDto.email
    anonymousinstance.password = createUserDto.password
    
    console.log(anonymousinstance)
    const saveduser = await this.usersRepository.save(anonymousinstance);
    return saveduser;
  }

  findAll() {
    const richinstance = new User()
    richinstance.name = 'Richard Oloyede'
    richinstance.age = 9;
    richinstance.password = '1234'
    richinstance.email = 'rich@yahoo.com'
    return richinstance
    // return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
