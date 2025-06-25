// min(array) --> returns min value in array
export const min = (values: number[]): number => {
  let min = values[0]
  
  for (const v of values) {
    if (v < min) min = v
  }
  
  return min
}
