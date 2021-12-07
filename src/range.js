// creates an array of length (length), filled with a range of numbers
export const range = (length = 1, options = {}) => {
  const { from = 0 } = options

  return Array.from({ length }, (_, i) => i+from)
}
