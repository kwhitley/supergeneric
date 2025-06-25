import { ascending } from './ascending'

export const median = (values: any[], sortBy?: (a: any, b: any) => number): any => {
  const sorted = values.slice().sort(sortBy || ascending)
  const mid = Math.floor(sorted.length / 2)
  const item = sorted[mid]
  const prev = sorted[mid-1]

  return sorted.length % 2
    ? item
    : typeof item === 'number'
      ? (prev + item) / 2
      : prev
}
