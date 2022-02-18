import { NotFoundException } from '@nestjs/common'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from '../../domain/entities/user.entity'
import { UserService } from '../../application/services/user.service'
import { NewUserInput } from '../../domain/dto/user/newUser.input'

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UserService) {}

  @Query((returns) => [User])
  users(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Query((returns) => User)
  async getUser(@Args({ name: 'id', type: () => Int }) id: number) {
    const user = await this.usersService.findOneById(id)
    if (!user) {
      throw new NotFoundException(id)
    }
    return user
  }

  @Mutation((returns) => User)
  addUser(@Args('newUser') newUser: NewUserInput): Promise<User> {
    return this.usersService.create(newUser)
  }

  @Mutation((returns) => Boolean)
  async removeUser(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.usersService.remove(id)
  }
}
