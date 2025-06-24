import { recurse } from './recurse'

export const convert = (data: any, ...fns: Function[]): any => {
  fns.forEach(fn => {
    data = recurse(fn)(data)
  })

  return data
}
