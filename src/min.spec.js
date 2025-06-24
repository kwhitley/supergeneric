import { min } from './min'
import { describe, it, expect } from 'bun:test'

describe('min([values])', () => {
  it('should return minimum of array of values', () => {
    expect(min([2, 4, 1, 3])).toBe(1)
  })
})
