import { onlyNumbers } from './onlyNumbers'
import { describe, it, expect } from 'bun:test'

describe('onlyNumbers([values])', () => {
  it('should remove non-numbers from array', () => {
    expect(onlyNumbers([2, 'abc', undefined, NaN, false, true, 1, 3])).toEqual([2, 1, 3])
  })
})
