import { last } from './last'

// makes a slash "/" delimited path from a list of string/numeric params
export const makePath = (...targets) => {
  let delimiter = last(targets)?.delimiter

  if (delimiter) {
    targets.pop()
  } else {
    delimiter = '/'
  }

  return targets
    .filter(v => v !== undefined && v !== '')
    .join(delimiter)
    .replace(delimiter + delimiter, delimiter)
}
