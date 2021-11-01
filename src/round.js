// round(value:number, precision?:number): number
export const round = (value, precision = 0) => {
  const mult = 10 ** precision

  return Math.round(value * mult) / mult
}
