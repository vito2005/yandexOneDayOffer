/*
Task description
You are given an array A of integers. Find the maximum number of non-intersecting segments of length 2(two adjacent elements),such that segments have an equal sum.
For ex, given nums = [10, 1, 3, 1, 2, 2, 1, 0, 4], there are three non-overlapping segments,
 each whose sum is equal to 4: (1, 3), (2, 2), (0, 4). Another three non-intersecting segments are: (3, 1), (2, 2), (0, 4)
Expected output = 3
Eg: arr[] = { 5,3,1,3,2,3}
Output: 1
Explanation: no adjacent pairs have same sum

Eg: arr[] ={9,9,9,9}
Output: 2

*/

// time O(n)
function solutionA(A) {
  const included = {}
  function isIncluded(sum, index) {
    const key = `${sum}_${index}` // creates a unique key
    if (included[key]) {
      return true
    }
    included[key] = true
    return false
  }

  const sums = {}
  let max = 0
  for (let i = 0; i < A.length - 1; i++) {
    const sum = A[i] + A[i + 1]

    if (sums[sum]) {
      if (!isIncluded(sum, i)) {
        sums[sum].push(i)
      }
      if (!isIncluded(sum, i + 1)) {
        sums[sum].push(i + 1)
      }
    } else {
      sums[sum] = [i, i + 1]
      isIncluded(sum, i) // seen `i`
      isIncluded(sum, i + 1) // seen `i+1`
    }

    const numberOfSegment = Math.floor(sums[sum].length / 2) // divides `2` since a segment contains two adjacent elements
    max = Math.max(max, numberOfSegment)
  }

  return max
}

console.log(solution2([10, 1, 3, 1, 2, 2, 1, 0, 4])) // Output: 3
console.log(solution2([5, 3, 1, 3, 2, 3])) // Output: 1
console.log(solution2([9, 9, 9, 9, 9])) // Output: 2
console.log(solution2([1, 5, 2, 4, 3, 3])) // Output: 3

// time O(n^2)
function solution1(A) {
  function getCount(idx, sum, arr) {
    let n = arr.length
    if (idx >= n - 1) {
      return 0
    }

    let count = 0
    if (arr[idx] + arr[idx + 1] == sum) {
      count = 1 + getCount(idx + 2, sum, arr)
    }
    return Math.max(count, getCount(idx + 1, sum, arr))
  }

  let n = A.length

  let ans = 0
  for (let i = 0; i < n - 1; i++) {
    let sum = A[i] + A[i + 1]
    ans = Math.max(ans, 1 + getCount(i + 2, sum, A))
  }

  return ans
}

function solution2(A) {
  let count = 0
  const sums = {}
  let prev_sum = -1
  for (let i = 0; i < A.length - 1; i++) {
    let current_sum = A[i] + A[i + 1]
    if (!sums[current_sum]) {
      sums[current_sum] = 1
      prev_sum = current_sum
    } else if (current_sum != prev_sum) {
      sums[current_sum] += 1
      prev_sum = current_sum
    } else {
      prev_sum = -1
    }
    count = Math.max(count, sums[current_sum])
  }
  return count
}
