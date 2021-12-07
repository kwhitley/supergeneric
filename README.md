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
- **binarySearch(items: any[], by?: function) => (target: any): object** - binary searches through **items**, using the **by** function as a value getter, or the item itself.  Assumes the items are already ascendingly-sorted (on the value itself or the value of the **by** function).  Returns `{ item, index }`.  No recursion used for low memory overhead, and finds items in very few steps.  Saves more time the bigger the length of **items**.
  ```js
  const doubles = Array(1000)
                    .fill(0)
                    .map((v, i) => i * 2)

  const searchDoubles = binarySearch(doubles) // save a reference to the search

  searchDoubles(4) // { item: 4, index: 2 }
  searchDoubles(3) // undefined

  // more complex using a by function
  const complex = Array(1000)
                    .fill(0)
                    .map((v, i) => ({ value: i * 2 }))

  const searchComplex = binarySearch(complex, item => item.value)

  searchComplex(4) // { item: { value: 4 }, index: 2 }
  ```
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
- **getMilliseconds(duration: string): number** - returns numeric milliseconds (for duration math) from a string duration.  Duration is case insensitive, and accepts singular or plural versions.  Numbers are ignored and passed-through.
  ```js
  getMilliseconds(131)          // 131
  getMilliseconds('1 second')   // 1000
  getMilliseconds('4 minutes')  // 1000 * 60 * 4
  getMilliseconds('2 days')     // 1000 * 60 * 60 * 24 * 2
  getMilliseconds('1 WEEK')     // 1000 * 60 * 60 * 24 * 7
  ```
- **last** - last element in an array
  ```js
  last([7, 1, 4, 2]) // 2
  ```
- **makePath(...segments: any, options:? object): string** - joins segments with default delimiter of '/', removing empty sections and duplicate delimiters.  Accepts a single option `{ delimiter: '|' }` to modify the delimiter.
  ```js
  makePath('foo', 'bar', 'baz')                       // foo/bar/baz
  makePath('foo', undefined, 13)                      // foo/13
  makePath('foo/', undefined, 13)                     // foo/13
  makePath('foo', 'bar', 'baz', { delimiter: '.' })   // foo.bar.baz
  ```
- **max(values: number[]): number** - returns the largest number in **values**, shorthand for `Math.max(...values)`
  ```js
  max([7, 1, 4, 2]) // 7
  ```
- **mean(values: number[]): number** - returns the average of an array of numbers (alias for **average(values: number[]): number**).
  ```js
  mean([7, 1, 4, 2]) // 3.5
  ```
- **median(values: number[], sortBy?: function): number** - returns the median value from an array of items.
  ```js
  median([2, 4, 1, 3, 0])     // 2
  median([2, 4, 1, 3, 0, 0])  // 1.5

  // or with a sorter function for objects
  const items = [
    { foo: 2 },
    { foo: 4 },
    { foo: 1 },
    { foo: -1 },
  ]

  const byFoo = sortBy('foo')

  median(items, byFoo) // { foo: 1 }
  ```
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
- **range(length: number, options?: object): number[]** - returns an Array of **length**, filled by the range values, starting at 0.  Accepts one option, `from: number` to change the starting value.
  ```js
  range(5)                  // [0, 1, 2, 3, 4]
  range(5, { from: 1 })     // [1, 2, 3, 4, 5]
  ```
- **recurse** - it's a secret.
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
- **sortBy(key: string|function, options?: object)** - sorting function that sorts by key (attribute name as string, or item function), and accepts a single option of `{ descending: true }` for reverse sorting.
  ```js
  const items = [
    { foo: 2 },
    { foo: 1 },
    { foo: -1 },
  ]

  const foo = item => item.foo
  const byFoo = sortBy('foo')
  const byFoo2 = sortBy(foo)

  items.sort(byFoo).map(foo)                        // [-1, 1, 2]
  items.sort(byFoo2).map(foo)                       // [-1, 1, 2]
  items.sort(byFoo, { descending: true }).map(foo)  // [2, 1, -1]
  ```
- **stddev(values: number[]): number** - returns the standard deviation of **values**.
  ```js
  stddev([7, 4, 2, 1]) // 2.6457513110645907
  ```
- **sum(values: number[]): number** - returns the sum of **values**
  ```js
  sum([7, 1, 4, 2]) // 14
  ```
