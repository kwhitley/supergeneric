import { required } from './required'

const MAX_ITERATIONS = 1000

// searches for an item in a sorted array, and returns { item, index }
// signature: binarySearch(values:any[])(target:string|number, by?:function): object
export const binarySearch = <T>(values: T[] = required('must include values'), by?: (item: T) => any) =>
  (target: any = required('must include a target')): { item: T; index: number } | undefined => {
    let lower = 0
    let upper = values.length
    let midpoint
    let iterations = 0

    while (iterations < MAX_ITERATIONS && (midpoint = lower + ((upper - lower) >> 1))) {
      const value = by ? by(values[midpoint]) : values[midpoint]

      if (value === target) return { item: values[midpoint], index: midpoint }

      if (value > target) upper = midpoint
      else lower = midpoint

      iterations++
    }

    return undefined
  }
