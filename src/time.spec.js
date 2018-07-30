import { expect } from 'chai'
import { getMilliseconds } from './time'

describe('supergeneric/time', () => {
  describe('getMilliseconds(stringOrNumber)', () => {
    it('should leave numeric values alone (assumes millisecond input)', () => {
      expect(getMilliseconds(13)).to.equal(13)
    })

    it('should convert numeric strings without units to equivalent ms', () => {
      expect(getMilliseconds('26')).to.equal(26)
    })

    it('should convert strings like "2 minutes" to equivalent ms', () => {
      expect(getMilliseconds('2 minutes')).to.equal(1000 * 60 * 2)
    })

    it('should not care about singular/plural and be case-insensitive', () => {
      expect(getMilliseconds('2 MINUTE')).to.equal(1000 * 60 * 2)
    })

    it('should throw if given wrong input type', () => {
      expect(() => getMilliseconds([])).to.throw()
      expect(() => getMilliseconds({})).to.throw()
      expect(() => getMilliseconds(null)).to.throw()
      expect(() => getMilliseconds(13)).to.not.throw()
      expect(() => getMilliseconds('1 month')).to.not.throw()
      expect(() => getMilliseconds('1 month ago is invalid')).to.throw()
    })
  })
})
