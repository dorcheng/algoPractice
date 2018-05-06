/*

Given an array of integers, print the array in such a way that the first element is first maximum and second element is first minimum and so on.

Examples:

Input : arr = [7, 1, 2, 3, 4, 5, 6]
Output : [7, 1, 6, 2, 5, 3, 4]

Input : arr = [1, 6, 9, 4, 3, 7, 8, 2]
Output : [9, 1, 8, 2, 7, 3, 6, 4]

*/

function quickSort(arr, left, right) {
  left = left || 0;
  right = right || arr.length - 1;

  let pivot = partition(arr, left, right);

  if (left < pivot - 1){
    quickSort(arr, left, pivot - 1);
  }
  if (right > pivot) {
    quickSort(arr, pivot, right);
  }
}

function partition(arr, start, end){
  let pivot = Math.floor((start + end) / 2);

  while (start <= end) {
    while (arr[start] < arr[pivot]) start++;
    while (arr[end] > arr[pivot]) end--;
    if (start <= end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  return start;
}

function alternativeSorting(arr) {
  let result = [];
  quickSort(arr);
  let currMin = 0;
  let currMax = arr.length - 1;
  let oddLength = arr.length % 2 !== 0;
  while (currMin < currMax) {
    result.push(arr[currMax]);
    result.push(arr[currMin]);
    currMax--;
    currMin++;
  }
  if (oddLength) {
    result.push(arr[currMax]);
  }
  return arr;
}

/*
Test Cases:

Should return all true
*/

console.log(alternativeSorting([7, 1, 2, 3, 4, 5, 6]).toString() === [ 7, 1, 6, 2, 5, 3, 4 ].toString());
console.log(alternativeSorting([1, 6, 9, 4, 3, 7, 8, 2]).toString() === [ 9, 1, 8, 2, 7, 3, 6, 4 ].toString());
console.log(alternativeSorting([]).toString() === [].toString());
console.log(alternativeSorting([1, 5]).toString() === [ 5, 1 ].toString());
console.log(alternativeSorting([1, -5, -8, -3, 9, -1, 4]).toString() === [ 9, -8, 4, -5, 1, -3, -1 ].toString());
