function add(a) {
  let sum = a

  function f(b) {
    sum += b
    return f
  }

  f.toString = () => sum

  return f
}

console.log('dddd', add(2)(3))
