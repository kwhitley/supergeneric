import { numbers } from './numbers'

describe('numbers(value)', () => {
  it('should convert numeric strings/numbers to a number', () => {
    expect(numbers('12.3')).toBe(12.3)
    expect(numbers(12.3)).toBe(12.3)
    expect(numbers('12f')).toBe('12f')
  })
})
