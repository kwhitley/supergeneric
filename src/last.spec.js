import { last } from './last'
import { describe, it, expect } from 'bun:test'

describe('last(values:any[])', () => {
  it('returns the last value of an array', () => {
    expect(last([1, 4, 5, 2])).toBe(2)
  })
})
