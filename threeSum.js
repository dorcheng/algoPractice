/*

Given an array S of n integers and a target number k, return true if there are elements a, b, c in S such that a + b + c = k.

Example:

Input:
[-1, 0, 1, 2, -1, -4], 2

Output:
true because 1- + 1 + 2 = 2

*/

// O(NlogN) + O(N^2)
function threeSum(arr, k) {
  arr.sort(function(a, b) {
    return a > b;
  });
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[i] + arr[left] + arr[right] === k) return true;
      else if (arr[i] + arr[left] + arr[right] > k) right--;
      else left++;
    }
  }
  return false;
}

/*
Test Cases:
*/

console.log(threeSum([-1, 0, 2, -1, -4, 5, 12], 10) === true);
console.log(threeSum([-1, 0, 2, -1, -4, 5, 12], 3) === true);
console.log(threeSum([-1, 0, 2, -1, -4], 10) === false);
console.log(threeSum([], 5) === false);
console.log(threeSum([5], 5) === false);
console.log(threeSum([5, 4], 9) === false);
