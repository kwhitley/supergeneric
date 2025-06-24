// creates an array of length (length), filled with random numbers (or results of fn param)
export const randomArray = (
  length = 1,
  fn = () => Math.random(),
) => Array(length)
      .fill(0)
      .map(fn)
