import { last } from './last'

describe('last(values:any[])', () => {
  it('returns the last value of an array', () => {
    expect(last([1, 4, 5, 2])).toBe(2)
  })
})
