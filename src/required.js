// use as default value of required variables to throw when not included
export const required = message => {
  throw new Error(message)
}
