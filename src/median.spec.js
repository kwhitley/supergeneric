import { median } from './median'
import { sortBy } from './sortBy'

describe('median(items: any[], sortBy?: function): any', () => {
  it('should return median of array of values', () => {
    expect(median([2, 4, 1, 3, 0])).toBe(2)
    expect(median([2, 4, 1, 3, 0, 0])).toBe(1.5)
  })

  it('should return median item if given a sortBy function', () => {
    const items = [
      { foo: 2 },
      { foo: 4 },
      { foo: 1 },
      { foo: -1 },
    ]

    const byFoo = sortBy('foo')

    expect(median(items, byFoo)).toEqual({ foo: 1 })
  })
})
