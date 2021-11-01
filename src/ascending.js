// ascending sort function.  Example: myArray.sort(ascending)
 export const ascending = (a, b) => a < b
                                    ? -1
                                    : (
                                        a > b
                                        ? 1
                                        : 0
                                      )
