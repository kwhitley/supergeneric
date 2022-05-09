// transposes a 2d array
// For example: [[1, 2, 3], [4, 5, 6]] --> [[1, 4], [2, 5], [3, 6]]
export const transpose = data => data[0].map((_, colIndex) => data.map(row => row[colIndex]))
