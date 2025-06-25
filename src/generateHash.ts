import { randomItem } from './randomItem'

export type GenerateHashOptions = {
  ambiguous?: boolean
  lower?: boolean | string
  upper?: boolean | string
  numeric?: boolean | string
  alpha?: boolean | string
  symbols?: boolean | string
  startWithLetter?: boolean
  all?: string
  only?: string
  prefix?: string
}

// creates a hash of length (length).
export const generateHash = (length = 6, options: GenerateHashOptions = {}) => {
  const {
    ambiguous = true,
    lower = true,
    upper = true,
    numeric = true,
    alpha,
    symbols = false,
    startWithLetter = true,
    all,
    only,
    prefix = '',
  } = options

  if (!length) return prefix

  const lowerSet = lower === false ? '' : typeof lower === 'string' ? lower : 'abcdefghijkmnopqrstuvwxyz' + (ambiguous ? 'l' : '')
  const upperSet = upper === false ? '' : typeof upper === 'string' ? upper : 'ABCDEFGHJKLMNPQRSTUVWXYZ' + (ambiguous ? 'IO' : '')
  const numericSet = numeric === false ? '' : typeof numeric === 'string' ? numeric : '123456789' + (ambiguous ? '0' : '')
  const symbolsSet = symbols === false ? '' : typeof symbols === 'string' ? symbols : '!@#$%^&*'

  const alphaSet = alpha === false ? '' : typeof alpha === 'string' ? alpha : lowerSet + upperSet
  const allSet = all || alphaSet + numericSet + symbolsSet

  if (only === '') throw new Error('Character set cannot be empty')
  if (!only && !allSet) throw new Error('Character set cannot be empty')

  const finalSet = only || allSet
  let set = finalSet
  if (!only && startWithLetter && !all && alphaSet) {
    set = alphaSet
  }
  if (!set) throw new Error('Character set cannot be empty')

  let result = prefix + randomItem(set)
  set = finalSet

  for (let i = 1; i < length; i++) {
    result += randomItem(set)
  }

  return result
}