const countSymbol = require('./A')

console.log(countSymbol('Hello', 'o')) // 1
console.log(countSymbol('Hello', 'l')) // 2
console.log(countSymbol('Hello', 'H')) // 1
console.log(countSymbol('Hello', 'h')) // 0
