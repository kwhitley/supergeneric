import { randomItem } from './randomItem'

export type GenerateHashOptions = {
  ambiguous?: boolean
  lower?: string
  upper?: string
  numeric?: string
  alpha?: string
  symbols?: string
  startWithLetter?: boolean
  all?: string
  only?: string
  prefix?: string
}

// creates a hash of length (length).
export const generateHash = (length = 6, options: GenerateHashOptions = {}) => {
  let {
    ambiguous = true,
    lower = 'abcdefghijkmnopqrstuvwxyz' + (ambiguous ? 'l' : ''),
    upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ' + (ambiguous ? 'IO' : ''),
    numeric = '123456789' + (ambiguous ? '0' : ''),
    alpha = (lower || '') + (upper || ''),
    symbols = '',
    startWithLetter = true,
    all = (alpha || '') + (numeric || '') + (symbols || ''),
    only = undefined,
    prefix = '',
  } = options

  let set = only || (startWithLetter ? alpha || all : all)

  prefix += randomItem(set)
  set = only ?? all
  while (--length) {
    prefix += randomItem(set)
  }

  return prefix
}
