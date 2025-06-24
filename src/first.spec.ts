import { first } from './first'
import { describe, it, expect } from 'bun:test'

describe('first(values:any[])', () => {
  it('returns the first value of an array', () => {
    expect(first([1, 4, 5, 2])).toBe(1)
  })
})
