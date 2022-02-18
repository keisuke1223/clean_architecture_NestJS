import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersResolver } from '../../adaptor/resolvers/user.resolver'
import { UserService } from '../../application/services/user.service'
import { User } from '../../domain/entities/user.entity'

@Module({
  providers: [UsersResolver, UserService],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule {}
