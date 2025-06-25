// by property name
export function sortBy<T, K extends keyof T>(
  key: K,
  options?: { descending?: boolean }
): (a: T, b: T) => number

// by extractor fn returning a comparable
export function sortBy<T, U extends string|number>(
  key: (item: T) => U,
  options?: { descending?: boolean }
): (a: T, b: T) => number

export function sortBy<T>(
  key: keyof T | ((item: T) => string|number),
  { descending = false }: { descending?: boolean } = {}
) {
  const less = descending ? 1 : -1
  const more = -less

  return typeof key === 'function'
    ? (a: T, b: T) => key(a) < key(b) ? less : more
    : (a: T, b: T) => a[key] < b[key] ? less : more
}
