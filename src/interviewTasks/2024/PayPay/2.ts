/*
Imagine there is a circle of red and blue tiles.
 The color of the tiles are represented by the array tileColors, where tileColors[i] = 0 means that the ith tile is red, whereas tileColors[i] = 1 means that the ith tile is blue. 
 We want to determine whether the tiles that are next to each other in the circle have alternating colors - the ith tile should have a different color than both the i+1th and the i-1th neighboring tiles . 
Given an integer size, we want to know how many groups of size consecutive tiles have alternating colors.
 Note that because tileColors represents a circle, the first and last tiles (elements in the array) are considered to be next to each other.
 */

function countAlternatingGroups(tileColors: number[], size: number): number {
  let count = 0
  const n = tileColors.length

  // Helper function to check if the tiles from index start have alternating colors
  function isAlternating(start: number): boolean {
    for (let i = start; i < start + size - 1; i++) {
      // Use modulo n for circular indexing
      if (tileColors[i % n] === tileColors[(i + 1) % n]) {
        return false
      }
    }
    return true
  }

  // Iterate through the tileColors array
  for (let i = 0; i < n; i++) {
    if (isAlternating(i)) {
      count++
    }
  }

  return count
}

// Example usage:
const tileColors: number[] = [0, 1, 0, 1, 1, 0]
const size: number = 2
console.log(countAlternatingGroups(tileColors, size)) // Output will depend on tileColors and size
