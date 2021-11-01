// mapping function, maps to date
export const dates = (value, key) => {
  key = key.toLowerCase()
  const isDate = key.includes('time') || key.includes('date')

  return isDate
          ? new Date(value)
          : value
}
