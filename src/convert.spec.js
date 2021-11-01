import { convert } from './convert'
import { dates } from './dates'

const exampleData = [
  {
    id: 123,
    date: 'Sun Jul 15 2018 13:26:27 GMT-0500',
    time: 1531679187261,
    price: '10.3',
    name: 'foo'
  }
]

describe('convert([values], fn1, fn2, ...)', () => {
  it('will return values (Array) with conversion fns applied', () => {
    const transformedDates = convert(exampleData, dates)

    expect(transformedDates[0].date).toEqual(new Date('Sun Jul 15 2018 13:26:27 GMT-0500'))
    expect(transformedDates[0].time).toEqual(new Date(1531679187261))
    expect(transformedDates[0].price).toBe('10.3')
  })
})
