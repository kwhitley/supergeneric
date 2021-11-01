// random(min, max) --> returns random value between min and max (inclusive)
export const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
