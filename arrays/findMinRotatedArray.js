/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.

*/

const findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums[right] > nums[left]) return nums[0]; // if array is sorted and not rotated

  if (nums[right] === nums[left]) return nums[0]; // if array only has one element

  while (left <= right) {
      let mid = Math.floor((left + right + 1) / 2);
      if (nums[mid] < nums[mid - 1]) return nums[mid];
      if (nums[mid] > nums[right]) { // first half is sorted
          left = mid + 1;
      } else { // second half is sorted
          right = mid - 1;
      }
  }
};

/*
Alternative solution: recursive
*/

const findMinRecursive = function(nums, left, right) {
  left = left || 0;
  right = right || nums.length - 1;

  if (nums[right] > nums[left]) return nums[0]; // if array is sorted and not rotated
  if (nums[right] === nums[left]) return nums[0]; // if array only has one element

  let mid = Math.floor((left + right + 1) / 2);

  if (nums[mid] < nums[mid - 1]) return nums[mid];

  if (nums[mid] > nums[right]) return findMinRecursive(nums, mid, right); // first half is sorted
  else return findMinRecursive(nums, left, mid); // second half is sorted
};

/*
Test Cases:
*/

console.log(findMin([1]) === 1);
console.log(findMin([1, 2]) === 1);
console.log(findMin([2, 0]) === 0);
console.log(findMin([3, 1, 2]) === 1);
console.log(findMin([5, 6, 7, 8, 9, 10]) === 5);
console.log(findMin([6, 7, 8, 9, 0, 1, 2]) === 0);
console.log(findMin([8, 9, 3, 4, 5, 6, 7]) === 3);
