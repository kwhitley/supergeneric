import { sortBy } from './sortBy'

describe('sortBy(key: string|function, options)', () => {
  let items = [
    { foo: 2 },
    { foo: 4 },
    { foo: 1 },
    { foo: -1 },
  ]

  it('should sort an array of objects by key (within each object)', () => {
    let byFoo = sortBy('foo')

    expect(items.sort(byFoo)).toEqual([
      { foo: -1 },
      { foo: 1 },
      { foo: 2 },
      { foo: 4 },
    ])
  })

  it('should allow key to be a function (that returns a value from each item)', () => {
    let byFoo = sortBy(item => item.foo)

    expect(items.sort(byFoo)).toEqual([
      { foo: -1 },
      { foo: 1 },
      { foo: 2 },
      { foo: 4 },
    ])
  })

  it('should sort in reverse if passed option { descending: true }', () => {
    let byFoo = sortBy('foo', { descending: true })

    expect(items.sort(byFoo)).toEqual([
      { foo: 4 },
      { foo: 2 },
      { foo: 1 },
      { foo: -1 },
    ])
  })
})
