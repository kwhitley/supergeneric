import { median } from './median'

describe('median([values])', () => {
  it('should return median of array of values', () => {
    expect(median([2, 4, 1, 3, 0])).toBe(2)
    expect(median([2, 4, 1, 3, 0, 0])).toBe(1.5)
  })
})
