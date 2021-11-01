import { dates } from './dates'

describe('dates(value, key)', () => {
  it('should convert entries with "time" or "date" to new Date()', () => {
    const now = new Date()
    const numeric = Number(now)
    const string = String(now)

    expect(dates(numeric, 'price')).toBe(numeric) // doesn't convert keys not containing "time" or "date"
    expect(dates(numeric, 'startDate')).toEqual(now)
    expect(dates(numeric, 'start_time')).toEqual(now)
  })
})
