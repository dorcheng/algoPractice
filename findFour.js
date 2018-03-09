/*

Given an array of integers, check if there exist four elements at different indexes in the array whose sum is equal to a given value k.
For example, if the given array is [1, 5, 1, 0, 6, 0] and k = 7, return true becayse (1+5+1+0=7).

Examples:

Input  : arr = [1, 5, 1, 0, 6, 0], k = 7
Output : true

Input :  arr = [38, 7, 44, 42, 28, 16, 10, 37, 33, 2, 38, 29, 26, 8, 25], k = 22
Output : false

*/

function findFour(arr, target) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (hash[sum]) hash[sum].push([i, j]);
      else hash[sum] = [[i, j]];
      if (hash[target - sum]) {
        //check if remaining sum exists in hashtable and see if the i and j are different than the one in the hashtable
        for (let m = 0; m < hash[target - sum].length; m++) {
          if (hash[target - sum][m][0] !== i && hash[target - sum][m][0] !== j && hash[target - sum][m][1] !== i && hash[target - sum][m][1] !== j) return true;
        }
      }
    }
  }
  return false;
}

console.log(findFour([ 1, 5, 1, 0, 6, 0 ], 12) === true);
console.log(findFour([38, 7, 44, 42, 28, 16, 10, 37, 33, 2, 38, 29, 26, 8, 25], 22) === false);
