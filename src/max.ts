// max(array) --> returns max value in array
export const max = (values: number[]): number => {
  let max = values[0]
  
  for (const v of values) {
    if (v > max) max = v
  }
  
  return max
}
