const UNITS = {
  ms: 1,
  second: 1000,
  minute: 60000,
  hour: 3600000,
  day: 3600000 * 24,
  week: 3600000 * 24 * 7,
  month: 3600000 * 24 * 30,
}

// converts text durations (e.g. "2 minutes") to milliseconds
export const getMilliseconds = duration => {
  if (!['string', 'number'].includes(typeof duration)) {
    throw new Error('getMilliseconds(duration) expects a string or number input')
  }

  const asNumber = Number(duration)

  if (!isNaN(asNumber)) {
    return asNumber
  }

  if (typeof duration !== 'string') {
    throw new Error('getMilliseconds(duration) expects a string or number input')
  }

  const split = duration.match(/^([\d\.,]+)\s?(\w+)$/)

  if (split.length === 3) {
    const len = parseFloat(split[1])
    let unit = split[2].replace(/s$/i, '').toLowerCase()
    if (unit === 'm') {
      unit = 'ms'
    }

    return (len || 1) * (UNITS[unit] || 0)
  }

  throw new Error('getMilliseconds(duration) requires a string in the following format "3 minutes"')
}

