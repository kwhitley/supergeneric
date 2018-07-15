import { random } from './math'

// first(array) --> returns first value in array
export const first = (values) => values[0]

// last(array) --> returns last value in array
export const last = (values) => values[values.length-1]

// sort helper function (e.g. values.sort(ascending))
export const ascending = (a, b) => a < b ? -1 : (a > b ? 1 : 0)

// sort helper function (e.g. values.sort(descending))
export const descending = (a, b) => a > b ? -1 : (a < b ? 1 : 0)

export const sortBy = (key, { descending = false } = {}) =>
  (a, b) => a[key] < b[key] ? (descending ? 1 : -1) : (a[key] > b[key] ? (descending ? -1 : 1) : 0)

export const onlyNumbers = (values) => values.filter(v => typeof v === 'number' && !isNaN(Number(v)))

export const randomItem = (items) => items[random(0, items.length-1)]
