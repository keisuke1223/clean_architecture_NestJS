import { Book } from 'domain/entities/book.entity'

describe('Book', () => {
  it('should be defined', () => {
    expect(new Book()).toBeDefined()
  })
})
