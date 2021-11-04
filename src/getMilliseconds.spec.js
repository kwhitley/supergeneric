import { getMilliseconds } from './getMilliseconds'

describe('getMilliseconds(duration: string|number): number', () => {
  it('should leave numeric values alone (assumes millisecond input)', () => {
    expect(getMilliseconds(13)).toBe(13)
  })

  it('should convert numeric strings without units to equivalent ms', () => {
    expect(getMilliseconds('26')).toBe(26)
  })

  it('should convert strings like "2 minutes" to equivalent ms', () => {
    expect(getMilliseconds('2 minutes')).toBe(1000 * 60 * 2)
  })

  it('should not care about singular/plural and be case-insensitive', () => {
    expect(getMilliseconds('2 MINUTE')).toBe(1000 * 60 * 2)
  })

  it('should throw if given wrong input type', () => {
    expect(() => getMilliseconds([])).toThrow()
    expect(() => getMilliseconds({})).toThrow()
    expect(() => getMilliseconds(null)).toThrow()
    expect(() => getMilliseconds(13)).not.toThrow()
    expect(() => getMilliseconds('1 month')).not.toThrow()
    expect(() => getMilliseconds('1 month ago is invalid')).toThrow()
  })
})
