import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsersResolver} from '../../interface/resolvers/user.resolver';
import {UserService} from '../../domain/services/user.service';
import {User} from '../../domain/entities/user.entity';

@Module({
    providers: [UsersResolver, UserService],
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
})
export class UserModule {
}
