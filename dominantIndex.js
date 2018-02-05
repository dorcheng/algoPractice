/*

In a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the index of the largest element, otherwise return -1.

Example 1:

Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.


Example 2:

Input: nums = [1, 2, 3, 4]
Output: -1
Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.

*/

const dominantIndex = function(nums) {
  let max = [0, -Infinity];
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max[1]) {
          max[1] = nums[i];
          max[0] = i;
      }
  }
  for (let i = 0; i < nums.length; i++) {
      if (i !== max[0] && nums[i] * 2 > max[1]){
          return -1;
      }
  }
  return max[0];
};

/*
Test Cases:
*/

console.log(dominantIndex([0]) === 0);
console.log(dominantIndex([-1, 0]) === 1);
console.log(dominantIndex([-2, 4, 9]) === 2);
console.log(dominantIndex([3, 6, 1, 0]) === 1);
console.log(dominantIndex([1, 2, 3, 4]) === -1);
console.log(dominantIndex([100, 8, 300, 202]) === -1);
