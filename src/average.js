import { sum } from './sum'

// average(number[]): number
export const average = (values = []) => sum(values) / values.length
