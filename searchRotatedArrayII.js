/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Write a function to determine if a given target is in the array.

The array may contain duplicates.

*/

const search = function(nums, target) {
  if (nums.length === 0) return false;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      let mid = Math.floor((left + right + 1) / 2);

      if (nums[mid] === target) return true;

      while (left < mid && nums[left] === nums[mid]) {
          left++;
      }
      if (nums[left] <= nums[mid]) { // first half is ordered
          if (target >= nums[left] && target < nums[mid]) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      } else { // second half is ordered
          if (target > nums[mid] && target <= nums[right]) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  }
  return false;
};

/*
Test Cases:
*/

console.log(search([], 1) === false);
console.log(search([2], 2) === true);
console.log(search([3], 1) === false);
console.log(search([5, 1], 1) === true);
console.log(search([1, 1, 1, 3, 1], 3) === true);
console.log(search([7, 4, 5, 6, 7, 7, 7, 7], 6) === true);
console.log(search([7, 4, 5, 6, 7, 7, 7, 7], 2) === false);
console.log(search([10, 11, 12, 2, 3, 4, 5], 11) === true);
