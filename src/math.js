// min(array) --> returns min value in array
export const min = (values) => Math.min.apply(Math, values)

// max(array) --> returns max value in array
export const max = (values) => Math.max.apply(Math, values)

// first(array) --> returns first value in array
export const first = (values) => values[0]

// last(array) --> returns last value in array
export const last = (values) => values[values.length-1]

// random(min, max) --> returns random value between min and max (inclusive)
export const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// sum(values) --> returns the sum of values [array]
export const sum = (values) => {
  let sum = 0

  for (var v of values) {
    sum += v
  }

  return sum
}

// pluck(items, indexName) --> returns array of plucked values at index
// example: pluck([{ a:1, b:2}, { a:3, b:1 }], 'a') --> [1,3]
export const pluck = (items, indexName) => {
  let results = []

  for (var item of items) {
    results.push(item[indexName])
  }

  return results
}

// MEAN([values])
export const mean = (values) => {
  if (!values || !values.length) {
    return undefined
  }

  return sum(values) / values.length
}

// s = sqrt(sum((x - m)^2)/(n - 1))
export const stddev = (values) => {
  let m = mean(values)
  let n = values.length
  let sumerror = 0

  for (var v of values) {
    sumerror += Math.pow(v - m, 2)
  }

  return Math.sqrt(sumerror/(n - 1))
}

export const round = (value, precision = 0) => {
  let mult = Math.pow(10, precision)

  return Math.round(value * mult) / mult
}

export const median = (values = []) => {
  let sorted = values.sort(ascending)
  let mid = Math.floor(sorted.length / 2)

  if (sorted.length % 2) {
    return sorted[mid]
  } else {
    return (sorted[mid-1] + sorted[mid]) / 2
  }
}

// median absolute deviation
export const mad = (values) => {
  let medianValue = median(values)
  let deviations = values.map(v => Math.abs(v - medianValue))

  return median(deviations)
}

export const rounder = (precision = 0) => (value) => round(value, precision)
