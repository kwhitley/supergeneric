import { transpose } from './transpose'

describe('transpose(arr2d: array[])', () => {
  it('should add an array of values', () => {
    expect(transpose([[1, 2, 3], [4, 5, 6]])).toEqual([[1, 4], [2, 5], [3, 6]])
  })
})
