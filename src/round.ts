// round(value:number, precision?:number): number
export const round = (value: number, precision = 0): number => {
  const mult = 10 ** precision

  return Math.round(value * mult) / mult
}
