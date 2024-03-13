import { randomItem } from './randomItem'

// creates a hash of length (length).
export const generateHash = (length = 6, options = {}) => {
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

  let set = only || (startWithLetter ? (alpha ? alpha : all) : all)

  for (let i=0; i<length; i++) {
    if (i===1) set = only ?? all
    prefix += randomItem(set)
  }

  return prefix
}
