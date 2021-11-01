import { ascending } from './ascending'

export const median = values => {
  const sorted = [ ...values].sort(ascending)
  const mid = Math.floor(sorted.length / 2)

  if (sorted.length % 2) {
    return sorted[mid]
  }

  return (sorted[mid-1] + sorted[mid]) / 2
}
