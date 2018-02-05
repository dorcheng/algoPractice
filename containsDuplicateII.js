/*

Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

*/

const containsNearbyDuplicate = function(nums, k) {
  let hashTable = {};
  for (let i = 0; i < nums.length; i++){
      if (nums[i] in hashTable && Math.abs(i - hashTable[nums[i]]) <= k) {
          return true;
      }
      hashTable[nums[i]] = i;
  }
  return false;
};

/*
Test Cases:

Should return all true
*/

console.log(containsNearbyDuplicate([], 0) === false);
console.log(containsNearbyDuplicate([-1, -1], 1) === true);
console.log(containsNearbyDuplicate([-1, 2, 3, 9, 2], 6) === true);
console.log(containsNearbyDuplicate([-1, 2, 3, 9, 2], 0) === false);
