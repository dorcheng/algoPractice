/*

Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr. For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.

Analyze the time and space complexities of your solution.

Example:

input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

*/

// O(N∙K) time
function sortKMessedArray(arr, k) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let j = k;
      while (j > 0) {
        if (arr[i - j] !== undefined && arr[i] < arr[i - j]) {
          [arr[i], arr[i - j]] = [arr[i - j], arr[i]];
        }
        j--;
      }
    }
  }
  return arr;
}

/*
Test Cases:
*/

console.log(sortKMessedArray([1], 0).toString() === [1].toString());
console.log(sortKMessedArray([1, 0], 1).toString() === [0, 1].toString());
console.log(sortKMessedArray([1, 0, 3, 2], 1).toString() === [0, 1, 2, 3].toString());
console.log(sortKMessedArray([1, 0, 3, 2, 4, 5, 7, 6, 8], 1).toString() === [0, 1, 2, 3, 4, 5, 6, 7, 8].toString());
console.log(sortKMessedArray([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2).toString() === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].toString());
console.log(sortKMessedArray([6, 1, 4, 11, 2, 0, 3, 7, 10, 5, 8, 9], 6).toString() === [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].toString());
