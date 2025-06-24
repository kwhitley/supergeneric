// returns only the numeric values of an array
 export const onlyNumbers = (values: any[]): number[] => values.filter(Number.isFinite)
