import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BooksResolver} from '../../interface/resolvers/books.resolver';
import {BooksService} from '../../domain/services/books.service';
import {Book} from '../../domain/entities/book.entity';

@Module({
    providers: [BooksResolver, BooksService],
    imports: [
        TypeOrmModule.forFeature([Book]),
    ],
})
export class BooksModule {
}
