import { randomItem } from './randomItem'

// creates a hash of length (length).
export const generateHash = (length = 6, characterSets = {}) => {
  const {
    lower = 'abcdefghijkmnopqrstuvwxyz',
    upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ',
    numeric = '123456789',
    symbols = ''
  } = characterSets

  return Array(length)
          .fill(0)
          .map((v, index) => index
                            ? randomItem(upper + (lower || '') + (numeric || '') + (symbols || ''))
                            : randomItem(upper + (lower || '')) // start with a letter
          )
          .join('')
}
