import { round } from './round'

export const rounder = (precision: number = 0) =>
  (value: number): number => round(value, precision)
