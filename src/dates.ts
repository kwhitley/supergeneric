// mapping function, maps to date
export const dates = (value: any, key: string): Date | any => {
  const lowerKey = key.toLowerCase()
  const isDate = lowerKey.includes('time') || lowerKey.includes('date')

  return isDate
          ? new Date(value)
          : value
}
