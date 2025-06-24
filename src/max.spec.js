import { max } from './max'
import { describe, it, expect } from 'bun:test'

describe('max([values])', () => {
  it('should return maximum of array of values', () => {
    expect(max([2, 4, 1, 3])).toBe(4)
  })
})
