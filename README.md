# supergeneric

[![npm version](https://badge.fury.io/js/supergeneric.svg)](https://www.npmjs.com/package/supergeneric)

A collection of lightweight, tree-shakable TypeScript utility functions for mathematical operations, array manipulation, object handling, and more. Designed for modern JavaScript/TypeScript projects with full type safety.

## Installation

```bash
npm install supergeneric
```

## Usage

```typescript
// Import individual functions (recommended for tree-shaking)
import { sum, average, sortBy } from 'supergeneric'

// Or import specific functions directly
import { sum } from 'supergeneric/sum'
import { sortBy } from 'supergeneric/sortBy'
```

# Migrating from v3.x to v4.x

Version 4.x includes several breaking changes and optimizations:

### 🗑️ Removed Functions

- **`getMilliseconds()`** - Duration string parsing function has been removed
- **`console`** - Color-injected console object has been removed

### ⚡ Performance Improvements

- **`min()` and `max()`** - No longer use spread operator (`Math.min(...values)`), now use optimized loops
  - **Why**: Fixes "Maximum call stack size exceeded" errors on large arrays (>100k elements)
  - **Impact**: More reliable for large datasets, slightly larger bundle size (+30B gzipped each)
  - **Migration**: No code changes needed, functions work identically but handle large arrays better

### 🔧 API Changes

- **`min()` and `max()`** - Now handle empty arrays consistently with other math functions
  - **Before**: `min([])` would return `Infinity`, `max([])` would return `-Infinity`
  - **After**: `min([])` and `max([])` return `undefined` (following the same pattern as `first()` and `last()`)

### 📦 Bundle Size Optimizations

- Code-golfed optimizations applied across all functions for smaller bundle sizes
- Bitwise operations used where appropriate (`>>` instead of `Math.floor`, `&` instead of `%`)
- Eliminated unnecessary intermediate variables and redundant operations

### 🎯 Migration Guide

**If you were using removed functions:**

```typescript
// v3.x - REMOVED in v4.x
import { getMilliseconds, console } from 'supergeneric'

// v4.x - Use alternatives
// For getMilliseconds: Use a dedicated duration parsing library like 'itty-time' or 'ms'
import ms from 'itty-time'
ms('1 hour') // 3600000

// For colored console: Use libraries like 'chalk' or 'kleur'
import chalk from 'chalk'
console.log(chalk.blue('Hello'))
```

**For large array handling (automatic improvement):**

```typescript
// v3.x - Could fail on large arrays
const largeArray = Array(200000).fill(0).map((_, i) => i)
min(largeArray) // RangeError: Maximum call stack size exceeded

// v4.x - Works reliably
min(largeArray) // 0 (no errors)
```

All other functions remain backward compatible with the same APIs.

# API Reference

## 📊 Mathematical Functions

### `sum(values: number[]): number`
Returns the sum of all values in the array.

```typescript
sum([1, 2, 3, 4]) // 10
```

### `average(values: number[]): number`
Returns the arithmetic mean of all values.

```typescript
average([1, 2, 3, 4]) // 2.5
```

### `mean(values: number[]): number`
Alias for `average()`. Returns the arithmetic mean.

```typescript
mean([1, 2, 3, 4]) // 2.5
```

### `min(values: number[]): number`
Returns the smallest value. Optimized for large arrays.

```typescript
min([7, 1, 4, 2]) // 1
```

### `max(values: number[]): number`
Returns the largest value. Optimized for large arrays.

```typescript
max([7, 1, 4, 2]) // 7
```

### `median(values: any[], sortBy?: (a: any, b: any) => number): any`
Returns the median value from an array.

```typescript
median([1, 2, 3, 4, 5]) // 3
median([1, 2, 3, 4]) // 2.5

// With custom comparator
const items = [{ value: 3 }, { value: 1 }, { value: 4 }]
median(items, (a, b) => a.value - b.value) // { value: 3 }
```

### `stddev(values: number[]): number`
Returns the standard deviation using the sample formula (n-1).

```typescript
stddev([1, 2, 3, 4, 5]) // 1.5811388300841898
```

### `round(value: number, precision?: number): number`
Rounds a number to the specified decimal places (default: 0).

```typescript
round(3.14159) // 3
round(3.14159, 2) // 3.14
```

### `rounder(precision?: number): (value: number) => number`
Returns a curried rounding function with preset precision.

```typescript
const roundTo2 = rounder(2)
[3.14159, 2.71828].map(roundTo2) // [3.14, 2.72]
```

## 🔀 Array Functions

### `first<T>(values: T[]): T | undefined`
Returns the first element of an array.

```typescript
first([1, 2, 3]) // 1
first([]) // undefined
```

### `last<T>(values: T[]): T | undefined`
Returns the last element of an array.

```typescript
last([1, 2, 3]) // 3
last([]) // undefined
```

### `ascending<T>(a: T, b: T): number`
Comparator function for ascending sort.

```typescript
[3, 1, 4, 1, 5].sort(ascending) // [1, 1, 3, 4, 5]
```

### `descending<T>(a: T, b: T): number`
Comparator function for descending sort.

```typescript
[3, 1, 4, 1, 5].sort(descending) // [5, 4, 3, 1, 1]
```

### `sortBy<T>(key: keyof T | ((item: T) => any), options?: { descending?: boolean }): (a: T, b: T) => number`
Creates a comparator function for sorting by property or extractor function.

```typescript
const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Carol', age: 35 }
]

// Sort by property
users.sort(sortBy('age')) // sorted by age ascending
users.sort(sortBy('name', { descending: true })) // by name descending

// Sort by function
users.sort(sortBy(u => u.name.length)) // by name length
```

### `range(length?: number, options?: { from?: number }): number[]`
Creates an array of sequential numbers.

```typescript
range(5) // [0, 1, 2, 3, 4]
range(3, { from: 5 }) // [5, 6, 7]
```

### `transpose<T>(matrix: T[][]): T[][]`
Transposes a 2D array (swaps rows and columns).

```typescript
transpose([[1, 2], [3, 4], [5, 6]]) // [[1, 3, 5], [2, 4, 6]]
```

### `onlyNumbers(values: any[]): number[]`
Filters an array to only numeric values.

```typescript
onlyNumbers([1, 'hello', 2.5, null, 42]) // [1, 2.5, 42]
```

## 🎲 Random Functions

### `random(min: number, max: number): number`
Returns a random integer between min and max (inclusive).

```typescript
random(1, 6) // 4 (dice roll)
random(10, 20) // 15
```

### `randomItem<T>(items: T[] | string): T | string`
Returns a random element from an array or character from a string.

```typescript
randomItem([1, 2, 3, 4, 5]) // 3
randomItem('hello') // 'e'
```

### `randomArray(length?: number, fn?: () => any): any[]`
Creates an array filled with results from a function.

```typescript
randomArray(3) // [0.234, 0.789, 0.456] (random numbers)
randomArray(3, () => random(1, 10)) // [7, 2, 9]
```

### `generateHash(length?: number, options?: GenerateHashOptions): string`
Generates a random alphanumeric string with extensive customization options.

```typescript
generateHash() // 'aB3kL9' (6 chars, starts with letter)
generateHash(8) // 'mK2pQ7R4'

// Advanced options
generateHash(10, {
  startWithLetter: false,
  ambiguous: false, // excludes similar-looking chars
  symbols: '!@#',
  only: 'ABCDEF123' // custom character set
})
```

## 🔧 Utility Functions

### `binarySearch<T>(values: T[], by?: (item: T) => any): (target: any) => { item: T; index: number } | undefined`
Performs binary search on a sorted array. Returns a search function.

```typescript
const numbers = [1, 3, 5, 7, 9, 11]
const search = binarySearch(numbers)

search(5) // { item: 5, index: 2 }
search(4) // undefined

// With extractor function
const items = [{ id: 1 }, { id: 3 }, { id: 5 }]
const searchById = binarySearch(items, item => item.id)
searchById(3) // { item: { id: 3 }, index: 1 }
```

### `makePath(...segments: any[]): string`
Joins path segments with '/' delimiter, handling empty values and duplicates.

```typescript
makePath('users', 42, 'profile') // 'users/42/profile'
makePath('api/', undefined, 'v1') // 'api/v1'

// Custom delimiter
makePath('a', 'b', 'c', { delimiter: '.' }) // 'a.b.c'
```

### `required(message: string): never`
Throws an error with the given message. Useful for required parameters.

```typescript
function greet(name = required('name is required')) {
  return `Hello, ${name}!`
}

greet('Alice') // 'Hello, Alice!'
greet() // throws: Error('name is required')
```

## 🗃️ Object Functions

### `merge(...objects: object[]): object`
Merges multiple objects into one.

```typescript
merge({ a: 1 }, { b: 2 }, { c: 3 }) // { a: 1, b: 2, c: 3 }
```

### `mergeClean(...objects: object[]): object`
Merges objects and removes undefined properties.

```typescript
mergeClean({ a: 1, b: undefined }, { c: 3 }) // { a: 1, c: 3 }
```

### `numbers(value: any): any`
Converts a value to a number if possible, otherwise returns unchanged.

```typescript
['1', '2.5', 'hello', 3].map(numbers) // [1, 2.5, 'hello', 3]
```

### `dates(obj: any, key: string): any`
Converts date-like properties to Date objects.

```typescript
const data = { created_at: '2023-01-01', updated_time: '2023-12-31' }
// Use with recurse() to process nested objects
```

## 🔄 Data Transformation

### `convert(data: any, ...fns: Function[]): any`
Applies multiple transformation functions to data recursively.

```typescript
const data = { values: ['1', '2', '3'] }
convert(data, numbers) // { values: [1, 2, 3] }
```

### `recurse(fn: Function): (data: any) => any`
Creates a function that applies a transformation recursively to nested data.

```typescript
const deepNumbers = recurse(numbers)
deepNumbers({
  a: '1',
  b: { c: '2', d: ['3', '4'] }
}) // { a: 1, b: { c: 2, d: [3, 4] } }
```

## TypeScript Support

All functions include full TypeScript definitions with proper generic types where applicable. The library is built with TypeScript and provides excellent IntelliSense support.

## Tree Shaking

Import only the functions you need for optimal bundle size:

```typescript
// Only imports the sum function
import { sum } from 'supergeneric'

// Or import directly for maximum tree-shaking
import { sum } from 'supergeneric/sum'
```

## Performance

- Mathematical functions use optimized loops instead of spread operators for large arrays
- Binary search provides O(log n) performance for sorted data
- All functions are pure and side-effect free where possible

## License

MIT