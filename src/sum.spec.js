import { sum } from './sum'

describe('sum([values])', () => {
  it('should add an array of values', () => {
    expect(sum([2, 4, 1, 3])).toBe(10)
  })
})
