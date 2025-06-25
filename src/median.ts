import { ascending } from './ascending'

export const median = (values: any[], sortBy?: (a: any, b: any) => number): any => {
  const sorted = values.slice().sort(sortBy || ascending)
  const mid = sorted.length >> 1
  const item = sorted[mid]

  return sorted.length & 1
    ? item
    : typeof item === 'number'
      ? (sorted[mid-1] + item) / 2
      : sorted[mid-1]
}
