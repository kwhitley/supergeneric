import { ascending } from './ascending'

export const median = (values, sortBy) => {
  const sorted = [ ...values].sort(sortBy || ascending)
  const mid = Math.floor(sorted.length / 2)
  const item = sorted[mid]
  const prev = sorted[mid-1]

  if (sorted.length % 2) {
    return item
  }

  return typeof item === 'number'
          ? (sorted[mid-1] + item) / 2
          : prev
}
