import { describe, expect, it } from 'bun:test'
import { generateHash } from './generateHash'

type TestLeaf = () => void

type TestTree = {
  [key: string]: TestTree | TestLeaf
}

const tests: TestTree = {
  'NAMED EXPORTS': {
    'import { generateHash } from "supergeneric"': {
      'is a function': () => expect(typeof generateHash).toBe('function'),
    },
  },
  'generateHash(length?, options?)': {
    'default behavior': {
      'generates a 6-character hash by default': () => {
        const result = generateHash()
        expect(result.length).toBe(6)
      },
      'generates hash of specified length': () => {
        expect(generateHash(10).length).toBe(10)
        expect(generateHash(1).length).toBe(1)
        expect(generateHash(20).length).toBe(20)
      },
      'starts with letter by default': () => {
        for (let i = 0; i < 100; i++) {
          const result = generateHash()
          expect(/^[a-zA-Z]/.test(result)).toBe(true)
        }
      },
      'contains alphanumeric characters by default': () => {
        const result = generateHash(100)
        expect(/^[a-zA-Z0-9]+$/.test(result)).toBe(true)
      },
    },
    'OPTIONS': {
      'prefix': {
        'adds prefix to generated hash': () => {
          const result = generateHash(6, { prefix: 'test_' })
          expect(result.startsWith('test_')).toBe(true)
          expect(result.length).toBe(11) // 5 prefix + 6 generated
        },
        'works with empty prefix': () => {
          const result = generateHash(6, { prefix: '' })
          expect(result.length).toBe(6)
        },
      },
      'startWithLetter': {
        'true: starts with letter': () => {
          for (let i = 0; i < 50; i++) {
            const result = generateHash(6, { startWithLetter: true })
            expect(/^[a-zA-Z]/.test(result)).toBe(true)
          }
        },
        'false: can start with any character from set': () => {
          const results = []
          for (let i = 0; i < 100; i++) {
            results.push(generateHash(1, { startWithLetter: false }))
          }
          expect(results.some(r => /^[0-9]/.test(r))).toBe(true)
        },
      },
      'ambiguous': {
        'true: includes ambiguous characters': () => {
          for (let i = 0; i < 100; i++) {
            const result = generateHash(50, { ambiguous: true })
            if (result.includes('l') || result.includes('I') || result.includes('O') || result.includes('0')) {
              return expect(true).toBe(true)
            }
          }
          expect(false).toBe(true) // Should have found ambiguous chars
        },
        'false: excludes ambiguous characters': () => {
          for (let i = 0; i < 50; i++) {
            const result = generateHash(50, { ambiguous: false })
            expect(result.includes('l')).toBe(false)
            expect(result.includes('I')).toBe(false)
            expect(result.includes('O')).toBe(false)
            expect(result.includes('0')).toBe(false)
          }
        },
      },
      'lower': {
        'true: includes lowercase letters': () => {
          const result = generateHash(100, { upper: false, numeric: false })
          expect(/[a-z]/.test(result)).toBe(true)
          expect(/[A-Z]/.test(result)).toBe(false)
          expect(/[0-9]/.test(result)).toBe(false)
        },
        'false: excludes lowercase letters': () => {
          const result = generateHash(100, { lower: false })
          expect(/[a-z]/.test(result)).toBe(false)
        },
        'string: uses custom lowercase set': () => {
          const result = generateHash(100, { lower: 'xyz', upper: false, numeric: false })
          expect(/^[xyz]+$/.test(result)).toBe(true)
        },
      },
      'upper': {
        'true: includes uppercase letters': () => {
          const result = generateHash(100, { lower: false, numeric: false })
          expect(/[A-Z]/.test(result)).toBe(true)
          expect(/[a-z]/.test(result)).toBe(false)
          expect(/[0-9]/.test(result)).toBe(false)
        },
        'false: excludes uppercase letters': () => {
          const result = generateHash(100, { upper: false })
          expect(/[A-Z]/.test(result)).toBe(false)
        },
        'string: uses custom uppercase set': () => {
          const result = generateHash(100, { upper: 'XYZ', lower: false, numeric: false })
          expect(/^[XYZ]+$/.test(result)).toBe(true)
        },
      },
      'numeric': {
        'true: includes numbers': () => {
          const result = generateHash(100, { lower: false, upper: false, startWithLetter: false })
          expect(/[0-9]/.test(result)).toBe(true)
          expect(/[a-zA-Z]/.test(result)).toBe(false)
        },
        'false: excludes numbers': () => {
          const result = generateHash(100, { numeric: false })
          expect(/[0-9]/.test(result)).toBe(false)
        },
        'string: uses custom numeric set': () => {
          const result = generateHash(100, { numeric: '789', lower: false, upper: false, startWithLetter: false })
          expect(/^[789]+$/.test(result)).toBe(true)
        },
      },
      'symbols': {
        'true: includes symbols': () => {
          const result = generateHash(100, { symbols: true, lower: false, upper: false, numeric: false, startWithLetter: false })
          expect(/[!@#$%^&*]/.test(result)).toBe(true)
        },
        'false: excludes symbols (default)': () => {
          const result = generateHash(100, { symbols: false })
          expect(/[!@#$%^&*]/.test(result)).toBe(false)
        },
        'string: uses custom symbol set': () => {
          const result = generateHash(100, { symbols: '!@#', lower: false, upper: false, numeric: false, startWithLetter: false })
          expect(/^[!@#]+$/.test(result)).toBe(true)
        },
      },
      'alpha': {
        'true: includes both upper and lower case': () => {
          const result = generateHash(100, { numeric: false })
          expect(/[a-z]/.test(result)).toBe(true)
          expect(/[A-Z]/.test(result)).toBe(true)
          expect(/[0-9]/.test(result)).toBe(false)
        },
        'false: excludes all letters': () => {
          const result = generateHash(100, { alpha: false, startWithLetter: false })
          expect(/[a-zA-Z]/.test(result)).toBe(false)
        },
        'string: uses custom alpha set': () => {
          const result = generateHash(100, { alpha: 'abcXYZ', numeric: false })
          expect(/^[abcXYZ]+$/.test(result)).toBe(true)
        },
      },
      'only': {
        'restricts to specific character set': () => {
          const result = generateHash(100, { only: 'abc123' })
          expect(/^[abc123]+$/.test(result)).toBe(true)
        },
        'overrides all other character options': () => {
          const result = generateHash(100, { only: 'xyz', lower: false, upper: false, numeric: false })
          expect(/^[xyz]+$/.test(result)).toBe(true)
        },
      },
      'all': {
        'overrides default character set construction': () => {
          const result = generateHash(100, { all: 'qwerty', startWithLetter: false })
          expect(/^[qwerty]+$/.test(result)).toBe(true)
        },
      },
    },
    'EDGE CASES': {
      'length of 0': () => {
        const result = generateHash(0, { prefix: 'test' })
        expect(result).toBe('test')
      },
      'empty character sets': {
        'only empty string throws': () => {
          expect(() => generateHash(1, { only: '' })).toThrow()
        },
        'all sets false with startWithLetter false': () => {
          expect(() => generateHash(1, { 
            lower: false, 
            upper: false, 
            numeric: false, 
            symbols: false,
            startWithLetter: false 
          })).toThrow()
        },
      },
      'single character sets': () => {
        const result = generateHash(10, { only: 'a' })
        expect(result).toBe('aaaaaaaaaa')
      },
    },
    'RANDOMNESS': {
      'generates different results': () => {
        const results = new Set()
        for (let i = 0; i < 100; i++) {
          results.add(generateHash(10))
        }
        expect(results.size).toBeGreaterThan(90) // Should be very unlikely to get duplicates
      },
      'maintains character distribution': () => {
        const results = []
        for (let i = 0; i < 1000; i++) {
          results.push(generateHash(1, { only: 'ab', startWithLetter: false }))
        }
        const aCount = results.filter(r => r === 'a').length
        const bCount = results.filter(r => r === 'b').length
        
        // Should be roughly even distribution (within reasonable bounds)
        expect(aCount).toBeGreaterThan(300)
        expect(aCount).toBeLessThan(700)
        expect(bCount).toBeGreaterThan(300)
        expect(bCount).toBeLessThan(700)
      },
    },
  }
}

// recursive test runner
const runTests = (tests: TestTree) => {
  for (const [name, test] of Object.entries(tests)) {
    if (typeof test === 'function') {
      it(name, test)
    } else {
      describe(name, () => runTests(test))
    }
  }
}

// run the tests!
runTests(tests)