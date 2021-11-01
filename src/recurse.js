export const recurse = fn => data => {
  if (data.length) {
    return data.map(recurse(fn))
  }

  for (let key in data) {
    data[key] = fn(data[key], key)
  }

  return data
}
