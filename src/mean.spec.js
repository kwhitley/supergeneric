import { average } from './average'
import { mean } from './mean'

describe('mean(values: number[]): number', () => {
  it('should be equivalent to average(values)', () => {
    const values = [2, 4, 1, 3]
    expect(average(values)).toBe(mean(values))
  })
})
