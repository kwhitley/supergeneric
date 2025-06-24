// mapping function to transform values to numbers
export const numbers = (value: any): any => {
  let num = Number(value)

  return isNaN(num)
          ? value
          : num
}
