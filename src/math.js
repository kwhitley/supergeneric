import { onlyNumbers, ascending } from './collections'

// min(array) --> returns min value in array
export const min = (values) => Math.min.apply(Math, onlyNumbers(values))

// max(array) --> returns max value in array
export const max = (values) => Math.max.apply(Math, onlyNumbers(values))

// random(min, max) --> returns random value between min and max (inclusive)
export const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// sum(values) --> returns the sum of values [array]
export const sum = (values) => {
  let sum = 0
  let filtered = onlyNumbers(values)

  for (var v of filtered) {
    sum += v
  }

  return sum
}

// MEAN([values])
export const mean = (values = []) => {
  let filtered = onlyNumbers(values)

  return sum(filtered) / filtered.length
}

// s = sqrt(sum((x - m)^2)/(n - 1))
export const stddev = (values) => {
  let filtered = onlyNumbers(values)
  let m = mean(filtered)
  let n = filtered.length
  let sumerror = 0

  for (var v of filtered) {
    sumerror += Math.pow(v - m, 2)
  }

  return Math.sqrt(sumerror/(n - 1))
}

export const round = (value, precision = 0) => {
  let mult = Math.pow(10, precision)

  return Math.round(value * mult) / mult
}

export const median = (values = []) => {
  let filtered = onlyNumbers(values)
  let sorted = filtered.sort(ascending)
  let mid = Math.floor(sorted.length / 2)

  if (sorted.length % 2) {
    return sorted[mid]
  } else {
    return (sorted[mid-1] + sorted[mid]) / 2
  }
}

// median absolute deviation
export const mad = (values) => {
  let filtered = onlyNumbers(values)
  let medianValue = median(filtered)
  let deviations = filtered.map(v => Math.abs(v - medianValue))

  return median(deviations)
}

export const rounder = (precision = 0) => (value) => round(value, precision)
