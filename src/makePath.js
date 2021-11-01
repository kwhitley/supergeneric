// makes a slash "/" delimited path from a list of string/numeric params
export const makePath = (...targets) =>
  targets
    .filter(v => v !== undefined && v !== '')
    .join('/')
    .replace('//', '/')
