/*

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n^2).
There is only one duplicate number in the array, but it could be repeated more than once.

*/

const findDuplicate = function(nums) {
  let slow = nums[0];
  let fast = nums[nums[0]];
  while (slow && fast && slow !== fast){
      slow = nums[slow];
      fast = nums[nums[fast]];
  }
  fast = 0;
  while (fast !== slow){
      fast = nums[fast];
      slow = nums[slow];
  }
  return slow;
};

/*

  Approach is similar to detecting a cycle in a singly linked list
  Ex. [4, 3, 5, 1, 2, 3]

  The mapping function of index -> number:

      0 -> 4
 {1, 5} -> 3
      2 -> 5
      3 -> 1
      4 -> 2

  The linked list that is formed starting from index 0 and using the mapping function to find the 'next' node:

  0 -> 4 -> 2 -> 5 -> 3 -> 1 -> 3 -> 1 -> 3 ... you eventually encounter a loop

*/

/*
Test Cases:
*/

console.log(findDuplicate([1, 3, 4, 2, 2]) === 2);
console.log(findDuplicate([4, 3, 5, 1, 2, 3]) === 3);
console.log(findDuplicate([1, 4, 7, 2, 5, 8, 3, 6, 4]) === 4);
console.log(findDuplicate([1, 9, 3, 6, 5, 10, 7, 8, 2, 4, 5]) === 5);
