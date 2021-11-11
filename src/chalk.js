export const colored = color =>
  (arg1, ...other) => typeof arg1 === 'string'
                      ? console.log(`%c${arg1}`, `color: ${color};`, ...other)
                      : console.log(arg1, ...other)

export const magenta = colored('magenta')
export const green = colored('#43a642')
export const blue = colored('#0075ff')
export const red = colored('red')
export const orange = colored('orange')
export const teal = colored('teal')
export const cyan = colored('#0dd')
export const purple = colored('purple')
export const grey = colored('#ccc')

export const console = Object.assign(console, { magenta, green, blue, red, orange, teal, cyan, purple, grey })

