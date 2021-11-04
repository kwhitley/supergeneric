supergeneric
=======
[![npm version](https://badge.fury.io/js/supergeneric.svg)](https://www.npmjs.com/package/supergeneric)

Just a collection of my favorite bespoke functions that I manage to work into nearly every project.  Added to NPM for my convenience (and yours, if you happen to use it)!


### Importing

```js
import { sum } from 'supergeneric'

// or for the tree-shaking minimalists...
import { sum } from 'supergeneric/sum'
```

### Migrating from v1.x to v2.x
Previously, functions were grouped into collections, such as `import { sum } from 'supergeneric/math'`.  This is no longer the case.  All functions are named exports from the base module, or may be referenced directly by name (e.g. "supergeneric/sum").
```js
// version 1.x
import { sum } from 'supergeneric/math'

// version 2.x
import { sum } from 'supergeneric'
```

# API
- **ascending** - ascending sort function
  ```js
  [7, 1, 4, 2].sort(ascending) // [1, 2, 4, 7]
  ```
- **average(values: number[]): number** - returns the average of an array of numbers
  ```js
  average([7, 1, 4, 2]) // 3.5
  ```
- **binarySearch**
- **console** - a color-injected version of `window.console`.  Only the first argument (string) will be colored... the rest will be left alone.
  ```js
  console.magenta('foo', 'bar') // foo bar (foo in magenta text)

  // available colors
  console.blue
  console.cyan
  console.green
  console.grey
  console.magenta
  console.orange
  console.purple
  console.red
  console.teal
  ```
- **convert**
- **dates**
- **descending** - descending sort function
  ```js
  [7, 1, 4, 2].sort(descending) // [7, 4, 2, 1]
  ```
- **first** - first element in an array
  ```js
  first([7, 1, 4, 2]) // 7
  ```
- **generateHash(length:number = 6): string** - generates an alpha-numeric (alpha on first letter) key of `length` characters
  ```js
  generateHash()  // RUaLy4
  generateHash(4) // w9Y7
  ```
- **getMilliseconds**
- **last** - last element in an array
  ```js
  last([7, 1, 4, 2]) // 2
  ```
- **mad**
- **makePath**
- **max(values: number[]): number** - returns the largest number in **values**, shorthand for `Math.max(...values)`
  ```js
  max([7, 1, 4, 2]) // 7
  ```
- **median**
- **merge(...items: object[]): object** - merges all **items**, shorthand for `Object.merge(...items)`
  ```js
  merge({ age: 1 }, { name: 'Mittens' }) // { age: 1, name: 'Mittens' }
  ```
- **mergeClean(...items: object[]): object** - same as **merge**, but removes empty properties
  ```js
  merge({ age: 1, pets: undefined }, { name: 'Mittens' }) // { age: 1, name: 'Mittens' }
  ```
- **min(values: number[]): number** - returns the smallest number in **values** shorthand for `Math.min(...values)`
  ```js
  min([7, 1, 4, 2]) // 1
  ```
- **numbers(item: any): any** - returns a number if the item can be parsed as a number, otherwise leaves it unchanged.  Used in mapping functions.
  ```js
  ['12', 4, '3.14', 'foo'].map(numbers) // [12, 4, 3.14, 'foo']
  ```
- **onlyNumbers(items: any[]): number[]** - returns only the numeric elements in **items**
  ```js
  onlyNumbers([1, 'foo', undefined, 5, NaN]) // [1, 5]
  ```
- **random(min: number, max: number): number** - returns a random number between **min** and **max**, inclusive.
  ```js
  random(1,9) // 7
  ```
- **randomArray(length: number, filler?: function = () => Math.random()): any[]** - returns an Array of **length**, filled by the filler function (Math.random by default, returning float values from 0 to 1).
  ```js
  randomArray(4) // [0.1231, 0.9999, 0.4612, 0]
  randomArray(8, () => randomItem('ABC')) // ACCABACA
  ```
- **randomItem(items: any[]): any** - returns a randomly-selected item from array (or string) **items**
  ```js
  randomItem('foobarbaz')    // a
  randomItem([8, 7, 4, 1])   // 7
  ```
- **required(message: string): Error** - throws an error with **message** if called.  Useful for assigning default values to this to force entry.
  ```js
  const foo(bar = required('bar is a required option of foo(bar)')) => `foo:${bar}:baz`

  foo('cat') // foocatbaz
  foo() // throws Error('bar is a required option of foo(bar)')
  ```
- **round(value: number, precision: number = 0): number** - rounds **value** by **precision** digits (default 0 for integer-rounding).
  ```js
  round(3.1415926)    // 3
  round(3.1415926, 2) // 3.14
  ```
- **rounder(precision: number = 0) => round(value)** - curried round function for mapping, etc.
  ```js
  const roundTo1Decimal = rounder(1)

  [67.14, 16.88, 1.16].map(roundTo1Decimal) // [67.1, 16.9, 1.2]
  ```
- **sortBy**
- **stddev**
- **sum(values: number[]): number** - returns the sum of **values**
  ```js
  sum([7, 1, 4, 2]) // 14
  ```
