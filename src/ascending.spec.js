import { ascending } from './ascending'

describe('ascending(a,b)', () => {
  it('should return an ascending sort function: e.g. values.sort(ascending)', () => {
    const values = [3, 1, 5, -1]

    expect(values.sort(ascending)).toEqual([-1, 1, 3, 5])
  })
})
