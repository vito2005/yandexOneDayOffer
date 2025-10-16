// Given two arrays of integers a and b of the same length, find the number of pairs (i, j) such that i ≤ j and a[i] - b[j] = a[j] - b[i].

function countPairs(a: number[], b: number[]): number {
  let count = 0
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
      if (a[i] - b[j] === a[j] - b[i]) {
        count++
      }
    }
  }
  return count
}

// Example usage:
const a = [1, 2, 3]
const b = [2, 3, 4]
const result = countPairs(a, b)
console.log(result) // Output the number of valid pairs
