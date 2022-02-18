import { Book } from '../../../../src/domain/entities/book.entity'

describe('Book', () => {
  it('should be defined', () => {
    expect(new Book()).toBeDefined()
  })
})
