import { randomItem } from './random'

// creates a hash of length (length).
export const generateHash = (length = 6) => {
  const lower = 'abcdefghijkmnopqrstuvwxyz'
  const upper = 'ABCDEFGHJKLMNPQRTUVWXYZ'
  const numeric = '2346789'

  return Array(length)
          .fill(0)
          .map((v, index) => index
                            ? randomItem(upper + lower + numeric)
                            : randomItem(upper + lower) // start with a letter
          )
          .join('')
}
