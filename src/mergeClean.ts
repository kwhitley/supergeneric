import { merge } from './merge'

// merges all objects and removed empty keys
export const mergeClean = (...objs: object[]): object => {
  const merged = merge(...objs) as Record<string, any>

  for (const key in merged) {
    const value = merged[key]

    if (value === undefined) {
      delete merged[key]
    }
  }

  return merged
}
