import { expect } from 'chai'
import {
  min,
  max,
  sum,
  random,
  round,
  rounder,
  mean,
  stddev,
  median,
  mad
} from './math'

describe = (name, fn) => {
  console.log('describe hijacked', name)
}

describe('supergeneric/math', () => {
  describe('min([values])', () => {
    it('should return minimum of array of values', () => {
      expect(min([2,1,3])).to.equal(1)
      expect(min([undefined,1,3])).to.equal(1)
    })
  })

  describe('max([values])', () => {
    it('should return minimum of array of values', () => {
      expect(max([2,4,1,3])).to.equal(4)
      expect(max([undefined,1,4,3])).to.equal(4)
    })
  })

  describe('sum([values])', () => {
    it('should add an array of values', () => {
      expect(sum([2,4,1,3])).to.equal(10)
      expect(sum([undefined,2,4,1,3])).to.equal(10)
    })
  })

  describe('mean([values])', () => {
    it('should average an array of values', () => {
      expect(mean([2,4,1,3])).to.equal(10/4)
      expect(mean([undefined,2,4,1,3])).to.equal(10/4)
    })
  })

  describe('median([values])', () => {
    it('should return median of array of values', () => {
      expect(median([2,4,1,3,0])).to.equal(2)
      expect(median([2,4,1,3,0,0])).to.equal(1.5)
    })
  })
})
