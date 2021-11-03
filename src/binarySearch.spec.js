import { binarySearch } from './binarySearch'

describe('binarySearch(values:any[])(target:string|number, by?:function): object', () => {
  const doubles = Array(1000)
                    .fill(0)
                    .map((v, i) => i * 2)

  const complex = Array(1000)
                    .fill(0)
                    .map((v, i) => ({ value: i * 2 }))

  const searchDoubles = binarySearch(doubles)

  it('returns { item, index } if found (simple list)', () => {
    expect(searchDoubles(4)).toEqual({
      item: 4,
      index: 2,
    })
  })

  it('returns undefined if not found', () => {
    expect(searchDoubles(3)).toBe(undefined)
  })

  it('allows for complex getter searching through "by" param', () => {
    const searchComplex = binarySearch(complex, item => item.value)

    expect(searchComplex(4)).toEqual({
      item: {
        value: 4,
      },
      index: 2,
    })
  })
})
