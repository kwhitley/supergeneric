import { average } from './average'

// s = sqrt(sum((x - m)^2)/(n - 1))
export const stddev = values => {
  const m = average(values)
  const n = values.length
  let sumerror = 0

  for (const v of values) {
    sumerror += (v - m) ** 2
  }

  return Math.sqrt(sumerror/(n - 1))
}
