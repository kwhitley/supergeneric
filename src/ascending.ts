// ascending sort function.  Example: myArray.sort(ascending)
 export const ascending = (a: any, b: any) => a < b
                                    ? -1
                                    : (
                                        a > b
                                        ? 1
                                        : 0
                                      )
