import { randomItem } from './randomItem'

// creates a hash of length (length).
export const generateHash = (length = 6, options = {}) => {
  const {
    ambiguous = true,
    lower = 'abcdefghijkmnopqrstuvwxyz' + (ambiguous ? 'l' : ''),
    upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ' + (ambiguous ? 'IO' : ''),
    numeric = '123456789' + (ambiguous ? '0' : ''),
    alpha = (lower || '') + (upper || ''),
    symbols = '',
    startWithLetter = true,
    all = (alpha || '') + (numeric || '') + (symbols || ''),
    only = undefined,
  } = options

  return Array(length)
          .fill(0)
          .map((v, index) => index || only
                            ? randomItem(only ?? all)
                            : randomItem(startWithLetter ? (only ?? alpha) : (only ?? all))
          )
          .join('')
}
