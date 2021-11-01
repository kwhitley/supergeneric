import { min } from './min'

describe('min([values])', () => {
  it('should return minimum of array of values', () => {
    expect(min([2, 4, 1, 3])).toBe(1)
  })
})
