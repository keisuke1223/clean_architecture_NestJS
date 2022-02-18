import { Test, TestingModule } from '@nestjs/testing'
import { BooksResolver } from '../../../../src/adaptor/resolvers/books.resolver'

describe('BooksResolver', () => {
  let resolver: BooksResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksResolver],
    }).compile()

    resolver = module.get<BooksResolver>(BooksResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
