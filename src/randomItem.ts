import { random } from './random'

export function randomItem<T>(items: T[]): T
export function randomItem(items: string): string
export function randomItem<T>(items: T[] | string) {
  return items[random(0, items.length - 1)]
}
