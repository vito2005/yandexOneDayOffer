// Compare Two Strings Lexicographically, comparing 2 strings alphabetically
// Write a function which implements case-insensitive
// lexicographical comparison of two strings
// (also known as alphabetical compare)
// all equality operators (==, >=, <=, !=) forbidden for whole strings & localeCompare as well
// a == b ⇒ return 0 ("HELLO"=="hello")
// a > b ⇒ return +1 ("banana">"apple")
// a < b ⇒ return -1 ("lemon"<"mango")

function compareStrings(s1, s2) {
  const len = Math.min(a.length, b.length)

  for (let i = 0; i < len; i++) {
    const letter1 = s1[i].toLowerCase()
    const letter2 = s2[i].toLowerCase()
    if (letter1 > letter2) {
      return 1
    }
    if (letter1 < letter2) {
      return -1
    }
  }
  if (s1.length > s2.length) {
    return 1
  }
  if (s1.length < s2.length) {
    return -1
  }
  return 0
}

console.log(compareStrings('apple', 'banana'))
