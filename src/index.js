function sum(a, b, c) {
  return a + b + c
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(func, args)
    } else {
      return function(...rest) {
        return curried.apply(func, args.concat(rest))
      }
    }
  }
}

const curried = curry(sum)

console.log(sum(1, 2, 3))
console.log(curried(1, 2)(3))
console.log(curried(1)(2, 3))