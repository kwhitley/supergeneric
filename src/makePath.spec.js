import { makePath } from './makePath'

describe('makePath(...paths: any, options?: object): string', () => {
  it('should join paths (with default delimiter of /', () => {
    expect(makePath('foo', 'bar', 'baz')).toBe('foo/bar/baz')
  })

  it('should join paths (with optional delimiter)', () => {
    expect(makePath('foo', 'bar', 'baz', { delimiter: '.' })).toBe('foo.bar.baz')
  })

  it('should remove empty bits', () => {
    expect(makePath('foo', undefined, 'baz')).toBe('foo/baz')
  })

  it('should get rid of trailing delimiters between items', () => {
    expect(makePath('foo/', 'bar', 'baz')).toBe('foo/bar/baz')
  })
})
