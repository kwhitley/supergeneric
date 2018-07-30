import chai, { expect } from 'chai'
import datetime from 'chai-datetime'
chai.use(datetime)

import {
  numbers,
  dates,
  convert,
} from './transform'

let exampleData = [
  {
    id: 123,
    date: 'Sun Jul 15 2018 13:26:27 GMT-0500',
    time: 1531679187261,
    price: '10.3',
    name: 'foo'
  }
]

describe('supergeneric/transform', () => {
  describe('convert([values], fn1, fn2, ...)', () => {
    it('will return values (Array) with conversion fns applied', () => {
      let transformedDates = convert(exampleData, dates)
      expect(transformedDates[0].date).to.equalDate(new Date(1531679187261))
      expect(transformedDates[0].time).to.equalDate(new Date(1531679187261))
      expect(transformedDates[0].price).to.equal('10.3')
    })
  })

  describe('numbers(value)', () => {
    it('should convert numeric strings/numbers to a number', () => {
      expect(numbers('12.3')).to.equal(12.3)
      expect(numbers(12.3)).to.equal(12.3)
      expect(numbers('12f')).to.equal('12f')
    })
  })

  describe('dates(value, key)', () => {
    it('should convert entries with "time" or "date" to new Date()', () => {
      expect(dates(1531679187261, 'price')).to.equal(1531679187261)
      expect(dates(1531679187261, 'startDate')).to.equalDate(new Date(1531679187261))
      expect(dates(1531679187261, 'start_time')).to.equalDate(new Date(1531679187261))
      expect(dates('Sun Jul 15 2018 13:26:27 GMT-0500', 'time')).to.equalDate(new Date(1531679187261))
    })
  })
})
