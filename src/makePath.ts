import { last } from './last'

// makes a slash "/" delimited path from a list of string/numeric params
export const makePath = (...targets: any[]): string => {
  const lastTarget = last(targets) as any
  const delimiter = lastTarget?.delimiter || '/'

  if (lastTarget?.delimiter) targets.pop()

  return targets
    .filter(v => v !== undefined && v !== '')
    .join(delimiter)
    .replace(delimiter + delimiter, delimiter)
}
