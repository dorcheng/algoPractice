/*

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

*/

const merge = function(nums1, m, nums2, n) {
  while (m > 0 && n > 0) {
      if (nums1[m - 1] >= nums2[n - 1]) {
          nums1[m + n - 1] = nums1[m - 1];
          m--;
      } else {
          nums1[m + n - 1] = nums2[n - 1];
          n--;
      }
  }
  while (n > 0) {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
  }
  return nums1; //return nums1 for the purpose of testing
};


/*
Test Cases:

Need to convert result to string because array comparisons deal with references, not values
*/

console.log(merge([0], 0, [1], 1).toString() === [1].toString());
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3).toString() === [-1, 0, 0, 1, 2, 2, 3, 3, 3].toString());

