// (2)

// Problem
// Simplify the implementation below as much as you can.
// Even better if you can also improve performance as part of the simplification!
// FYI: This code is over 35 lines and over 300 tokens, but it can be written in
// 5 lines and in less than 60 tokens.
// Function on the next page.

function func(s, a, b) {
  var match_empty = /^$/
  if (s.match(match_empty)) {
    return -1
  } else {
    var i = s.length - 1
    var aIndex = -1
    var bIndex = -1

    while (aIndex == -1 && bIndex == -1 && i >= 0) {
      if (s.substring(i, i + 1) == a) aIndex = i
      if (s.substring(i, i + 1) == b) bIndex = i

      i--
    }

    if (aIndex != -1) {
      if (bIndex == -1) return aIndex
      else return Math.max(aIndex, bIndex)
    } else {
      if (bIndex != -1) return bIndex
      else return -1
    }
  }
}

function func(s, a, b) {
  return s.length === 0 ? -1 : Math.max(s.lastIndexOf(a), s.lastIndexOf(b))
}
