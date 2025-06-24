// creates an array of length (length), filled with a range of numbers
export const range = (length = 1, options: { from?: number } = {}): number[] => {
  const { from = 0 } = options

  return Array.from({ length }, (_, i: number) => i+from)
}
