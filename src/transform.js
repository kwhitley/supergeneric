export const recurse = fn => data => {
  if (data.length) {
    return data.map(recurse(fn))
  }

  for (let key in data) {
    data[key] = fn(data[key], key)
  }

  return data
}

export const numbers = value => {
  let num = Number(value)

  return isNaN(num) ? value : num
}

export const dates = (value, key) => {
  key = key.toLowerCase()
  const isDate = key.includes('time') || key.includes('date')

  return isDate ? new Date(value) : value
}

export const convert = (data, ...fns) => {
  fns.forEach(fn => {
    data = recurse(fn)(data)
  })

  return data
}

export const merge = (...objs) => Object.assign(...objs)

export const mergeClean = (...objs) => {
  let merged = merge(...objs)

  for (var key in merged) {
    let value = merged[key]

    if (value === undefined) {
      delete merged[key]
    }
  }

  return merged
}
