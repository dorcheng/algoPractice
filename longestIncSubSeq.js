/*

Given an an array of numbers, find the length of the longest possible subsequence that is increasing. This subsequence can "jump" over numbers in the array. For example in [3, 10, 4, 5] the longest increasing subsequence (LIS) is [3, 4, 5]

*/

function subSeq(arr) {
  if (arr.length === 0) return 0;
  let lengths = new Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++){
    for (let j = 0; j < i; j++){
      if (arr[j] < arr[i] && (lengths[j] + 1) > lengths[i]) {
        lengths[i] = lengths[j] + 1;
      }
    }
  }
  return lengths.reduce(function(a, b){
    return Math.max(a, b);
  });
}

/*
Test Cases:
*/

console.log(subSeq([3, 4, 2, 1, 10, 6]) === 3);
console.log(subSeq([3, 4, -1, 0, 6, 2, 3]) === 4);
console.log(subSeq([]) === 0);
console.log(subSeq([-5, -1, -6, 0, 4, 3, 8]) === 5);
console.log(subSeq([5, 5, 5, 5, 5]) === 1);
