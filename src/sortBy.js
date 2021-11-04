/**
 * sorts by a predefined key.
 * @exports collections/sortBy
 * @example
 * people.sort(sortBy('name'))
 * @param {string} key - attribute name for object sorting
 * @param {boolean} descending - set to true for descending sort
 * @returns {array} sorted by attribute @name
 */
export const sortBy = (key, { descending = false } = {}) => {
  const less = descending
                ? 1
                : -1
  const more = less * -1

  return typeof key === 'function'
          ? (a, b) => key(a) < key(b)
                      ? less
                      : more
          : (a, b) => a[key] < b[key]
                      ? less
                      : more
}
