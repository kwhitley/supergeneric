import { descending } from './descending'

describe('descending(a,b)', () => {
  it('should return an descending sort function: e.g. values.sort(descending)', () => {
    const values = [3, 1, 5, -1]

    expect(values.sort(descending)).toEqual([5, 3, 1, -1])
  })
})
