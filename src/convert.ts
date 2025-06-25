import { recurse } from './recurse'

type AnyFunction = (...args: any[]) => any

export const convert = (data: any, ...fns: AnyFunction[]): any => {
  for (const fn of fns) {
    data = recurse(fn)(data)
  }

  return data
}
