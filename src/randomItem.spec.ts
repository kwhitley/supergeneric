import { randomItem } from './randomItem'
import { describe, it, expect } from 'bun:test'

describe('randomItem([values])', () => {
  it('should return a random item from within the set of values', () => {
    const values = [3, 1, 5, -1]

    expect(values.includes(randomItem(values))).toBe(true)
  })
})
