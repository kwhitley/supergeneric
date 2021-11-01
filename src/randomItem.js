import { random } from './random'

// returns a random entry from an array
export const randomItem = items => items[random(0, items.length-1)]
