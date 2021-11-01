import { max } from './max'

describe('max([values])', () => {
  it('should return maximum of array of values', () => {
    expect(max([2, 4, 1, 3])).toBe(4)
  })
})
