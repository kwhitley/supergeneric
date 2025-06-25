type AnyFunction = (...args: any[]) => any

export const recurse = (fn: AnyFunction) => (data: any): any => {
  if (data.length) {
    return data.map(recurse(fn))
  }

  for (let key in data) {
    data[key] = fn(data[key], key)
  }

  return data
}
