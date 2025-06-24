import { last } from './last'

// makes a slash "/" delimited path from a list of string/numeric params
export const makePath = (...targets: any[]): string => {
  let delimiter = (last(targets) as any)?.delimiter

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
