import { sum } from './sum'

// average(number[]): number
export const average = (values: number[] = []): number =>
  sum(values) / values.length
