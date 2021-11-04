import { stddev } from './stddev'

describe('stddev(values: number[]): number', () => {
  it('should return the standard deviation of values', () => {
    const values = [7, 4, 2, 1]

    expect(stddev(values)).toBe(2.6457513110645907)
  })
})
