/* 
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

function solution(A) {
  // Implement your solution here
  const positiveIntegers = new Set()

  // Iterate through the array and add positive integers to the set
  for (let num of A) {
    if (num > 0) {
      positiveIntegers.add(num)
    }
  }

  // Find the smallest positive integer not present in the set
  let smallestMissing = 1
  while (positiveIntegers.has(smallestMissing)) {
    smallestMissing++
  }

  return smallestMissing
}

console.log(solution([1, 3, 6, 4, 1, 2])) // Output: 5
console.log(solution([1, 2, 3])) // Output: 4
console.log(solution([-1, -3])) // Output: 1

function solution2(A) {
  A.sort()

  // Find the smallest positive integer not present in the set
  let smallestMissing = 1
  A.forEach((value) => {
    if (smallestMissing === value) {
      smallestMissing++
    }
  })

  return smallestMissing
}

console.log(solution2([1, 3, 6, 4, 1, 2])) // Output: 5
console.log(solution2([1, 2, 3])) // Output: 4
console.log(solution2([-1, -3])) // Output: 1
