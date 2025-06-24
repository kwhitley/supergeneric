import { required } from './required'
import { describe, it, expect } from 'bun:test'

describe('required(message: string): never', () => {
  it('should throw if the value is undefined', () => {
    const fn = (
      foo = required('foo is required')
    ) => foo

    expect(fn).toThrow('foo is required')
  })

  it('should throw if the value is undefined', () => {
    const fn = (
      foo: any = required('foo is required')
    ) => foo

    expect(() => fn('abc')).not.toThrow()
  })
})
