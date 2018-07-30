import { expect } from 'chai'
import {
  ascending,
  descending,
  sortBy,
  onlyNumbers,
  randomItem,
  first,
  last
} from './collections'

describe('supergeneric/collections', () => {
  describe('collections/first([values])', () => {
    it('should return first value of array', () => {
      expect(first([2,4,1,3])).to.equal(2)
    })
  })

  describe('last([values])', () => {
    it('should return last value of array', () => {
      expect(last([2,4,1,3])).to.equal(3)
    })
  })

  describe('onlyNumbers([values])', () => {
    it('should remove non-numbers from array', () => {
      expect(onlyNumbers([2,'abc',undefined,NaN,false,true,1,3])).to.eql([2,1,3])
    })
  })

  describe('ascending(a,b)', () => {
    it('should return an ascending sort function: e.g. values.sort(ascending)', () => {
      let values = [3,1,5,-1]

      expect(values.sort(ascending)).to.eql([-1,1,3,5])
    })
  })

  describe('descending(a,b)', () => {
    it('should return an descending sort function: e.g. values.sort(descending)', () => {
      let values = [3,1,5,-1]

      expect(values.sort(descending)).to.eql([5,3,1,-1])
    })
  })

  describe('sortBy(key, options)', () => {
    let items = [
      { foo: 2 },
      { foo: 4 },
      { foo: 1 },
      { foo: -1 },
    ]

    it('should sort an array of objects by key (within each object)', () => {
      let byFoo = sortBy('foo')

      expect(items.sort(byFoo)).to.eql([
        { foo: -1 },
        { foo: 1 },
        { foo: 2 },
        { foo: 4 },
      ])
    })

    it('should sort in reverse if passed option { descending: true }', () => {
      let byFoo = sortBy('foo', { descending: true })

      expect(items.sort(byFoo)).to.eql([
        { foo: 4 },
        { foo: 2 },
        { foo: 1 },
        { foo: -1 },
      ])
    })
  })

  describe('randomItem([values])', () => {
    it('should return a random item from within the set of values', () => {
      let values = [3,1,5,-1]

      expect(values.includes(randomItem(values))).to.equal(true)
    })
  })

  describe('pluck([values])', () => {
    it('should return a random item from within the set of values', () => {
      let values = [3,1,5,-1]

      expect(values.includes(randomItem(values))).to.equal(true)
    })
  })
})
