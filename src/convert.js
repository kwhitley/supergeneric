import { recurse } from './recurse'

export const convert = (data, ...fns) => {
  fns.forEach(fn => {
    data = recurse(fn)(data)
  })

  return data
}
