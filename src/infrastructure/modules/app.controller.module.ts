import { Module } from '@nestjs/common'

import { BooksModule } from 'infrastructure/modules/books.module'

@Module({
  imports: [BooksModule],
})
export class AppControllerModule {}
