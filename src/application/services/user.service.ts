import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from 'domain/entities/user.entity'
import { NewUserInput } from 'application/input/user/newUser.input'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepostiory: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepostiory.find()
  }

  findOneById(id: number): Promise<User> {
    return this.usersRepostiory.findOne(id)
  }

  async create(data: NewUserInput): Promise<User> {
    const user = this.usersRepostiory.create(data)
    await this.usersRepostiory.save(user)
    return user
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.usersRepostiory.delete(id)
    return result.affected > 0
  }
}
