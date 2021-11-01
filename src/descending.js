// Descending sort function.  Example: myArray.sort(descending)
 export const descending = (a, b) => a > b
                                    ? -1
                                    : (
                                        a < b
                                        ? 1
                                        : 0
                                      )
