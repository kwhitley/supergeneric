// Descending sort function.  Example: myArray.sort(descending)
 export const descending = (a: any, b: any): number => a > b
                                    ? -1
                                    : (
                                        a < b
                                        ? 1
                                        : 0
                                      )
