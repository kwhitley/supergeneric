import { random } from './math'

/**
 * returns first value in array
 * @exports collections/first
 * @param {array} values - an array of values/objects
 * @returns {object} first value/object in an array
 */
export const first = (values) => values[0]

/**
 * returns last value in array
 * @exports collections/last
 * @param {array} values - an array of values/objects
 * @returns {object} last value/object in an array
 */
export const last = (values) => values[values.length-1]

/**
 * ascending sort function.  Example: myArray.sort(ascending)
 * @exports collections/ascending
 * @returns {function} ascending sort function
 */
export const ascending = (a, b) => a < b ? -1 : (a > b ? 1 : 0)

/**
 * Descending sort function.  Example: myArray.sort(descending)
 * @exports collections/descending
 * @returns {function} descending sort function
 */
export const descending = (a, b) => a > b ? -1 : (a < b ? 1 : 0)

/**
 * sorts by a predefined key.
 * @exports collections/sortBy
 * @example
 * people.sort(sortBy('name'))
 * @param {string} key - attribute name for object sorting
 * @param {boolean} descending - set to true for descending sort
 * @returns {array} sorted by attribute @name
 */
export const sortBy = (key, { descending = false } = {}) =>
  (a, b) => a[key] < b[key] ? (descending ? 1 : -1) : (a[key] > b[key] ? (descending ? -1 : 1) : 0)

/**
 * returns only the numeric values of an array
 * @exports collections/onlyNumbers
 * @param {array} values - an array of values
 * @returns {array} only numeric values
 */
export const onlyNumbers = (values) => values.filter(v => typeof v === 'number' && !isNaN(Number(v)))

/**
 * returns a random entry from an array
 * @exports collections/randomItem
 * @param {array} items - an array of values/objects
 * @returns {object} random value/object from array of values/objects
 */
export const randomItem = (items) => items[random(0, items.length-1)]
