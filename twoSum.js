/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

const twoSum = function(nums, target) {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashTable) {
      return [hashTable[nums[i]], i];
    }
    hashTable[target - nums[i]] = i;
  }
  return false;
};

/*
Test Cases:

Need to convert result to string because array comparisons deal with references, not values
*/

console.log(twoSum([0, 1, 3], 2) === false);
console.log(twoSum([0, 1, 3], 3).toString() === [0, 2].toString());
console.log(twoSum([0, 1, 5, 8, -2, 3], -1).toString() === [1, 4].toString());
console.log(twoSum([0, 1, 3, -5, -2, 3], -7).toString() === [3, 4].toString());

// alternative solution is O(n^2) time ... not optimal
const twoSumAlternative = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j];
          }
      }
  }
  return false;
};
