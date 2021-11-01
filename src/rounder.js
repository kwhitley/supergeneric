import { round } from './round'

export const rounder = (precision = 0) => value => round(value, precision)
