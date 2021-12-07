import { range } from './range'

describe('range(length: number, options?: object): number[]', () => {
  it('should create an array filled with a range of numbers (e.g. range(3) // [0, 1, 2]', () => {
    let arr = range(3)

    expect(arr).toEqual([0, 1, 2])
  })

  it('should create an array filled with a range of numbers starting at second number (e.g. range(3, { from: 1 }) // [1, 2, 3]', () => {
    let arr = range(3, { from: 1 })

    expect(arr).toEqual([1, 2, 3])
  })
})
