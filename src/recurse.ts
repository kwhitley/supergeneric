export const recurse = (fn: Function) => (data: any): any => {
  if (data.length) {
    return data.map(recurse(fn))
  }

  for (let key in data) {
    data[key] = fn(data[key], key)
  }

  return data
}
