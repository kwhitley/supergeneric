// median absolute deviation
export const mad = values => {
  const medianValue = median(values)
  const deviations = values.map(v => Math.abs(v - medianValue))

  return median(deviations)
}
