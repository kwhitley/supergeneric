import { round } from './round'

export const rounder = (precision = 0) =>
  (value: number): number => round(value, precision)
