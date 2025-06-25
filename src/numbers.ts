// mapping function to transform values to numbers
export const numbers = (value: any): any => {
  const num = Number(value)

  return isNaN(num) ? value : num
}
