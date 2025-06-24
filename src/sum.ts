// sum(values) --> returns the sum of values [array]
export const sum = (values: number[]): number => {
  let sum = 0

  for (const v of values) {
    sum += v
  }

  return sum
}
