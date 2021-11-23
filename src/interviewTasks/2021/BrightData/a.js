// (1)
// Implement function verify(text) which verifies whether parentheses within text are
// correctly nested. You need to consider three kinds: (), [], <> and only these kinds.

//  Examples:

// verify("---(++++)----") -> 1
// verify("") -> 1
// verify("before ( middle []) after ") -> 1
// verify(") (") -> 0
// verify("<(   >)") -> 0
// verify("(  [  <>  ()  ]  <>  )") -> 1
// verify("   (      [)") -> 0

function verify(str) {
  const brackets = { ')': '(', ']': '[', '>': '<' }
  const closedBrackets = Object.keys(brackets)
  const openedBrackets = Object.values(brackets)
  const stack = []

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (openedBrackets.includes(char)) {
      stack.push(char)
      continue
    }

    if (closedBrackets.includes(char)) {
      if (brackets[char] !== stack[stack.length - 1]) {
        return 0
      }

      stack.pop()
    }
  }

  return (stack.length === 0 && 1) || 0
}

console.log(verify('---(++++)----')) // -> 1
console.log(verify('')) // -> 1
console.log(verify('before ( middle []) after ')) // -> 1
console.log(verify(') (')) // -> 0
console.log(verify('<(   >)')) // -> 0
console.log(verify('(  [  <>  ()  ]  <>  )')) //-> 1
console.log(verify('   (      [)')) //-> 0
