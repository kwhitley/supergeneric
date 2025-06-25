// use as default value of required variables to throw when not included
export const required = (message: string): never => {
  throw new Error(message)
}
