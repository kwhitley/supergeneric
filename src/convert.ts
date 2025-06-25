import { recurse } from './recurse'

type AnyFunction = (...args: any[]) => any

export const convert = (data: any, ...fns: AnyFunction[]): any => {
  fns.forEach(fn => {
    data = recurse(fn)(data)
  })

  return data
}
