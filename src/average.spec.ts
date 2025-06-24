import { average } from './average'
import { describe, it, expect } from 'bun:test'

describe('average([values])', () => {
  it('should average an array of values', () => {
    expect(average([2, 4, 1, 3])).toBe(10/4)
  })
})
