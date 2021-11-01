// merges all objects and removed empty keys
export const mergeClean = (...objs) => {
  const merged = merge(...objs)

  for (const key in merged) {
    const value = merged[key]

    if (value === undefined) {
      Reflect.deleteProperty(merged, key)
    }
  }

  return merged
}
