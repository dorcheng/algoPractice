/*

The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between "heat" and "hit" is 3:

By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
We cannot get the same string from both strings by deleting 2 letters or fewer.
Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.

Examples:

input:  str1 = "dog", str2 = "frog"
output: 3

input:  str1 = "some", str2 = "some"
output: 0

input:  str1 = "some", str2 = "thing"
output: 9

input:  str1 = "", str2 = ""
output: 0

*/

function deletionDistance(str1, str2) {
  let memo = [];
  for (let i = 0; i < str1.length + 1; i++) { // str1.length + 1 rows
    memo.push(new Array(str2.length + 1)); // str2.length + 1 cols
  }
  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0) {
        memo[i][j] = j;
      } else if (j === 0) {
        memo[i][j] = i;
      } else if (str1[i - 1] === str2[j - 1]) {
        memo[i][j] = memo[i - 1][j - 1];
      } else {
        memo[i][j] = 1 + Math.min(memo[i][j - 1], memo[i - 1][j]);
      }
    }
  }
  console.log(memo);
  return memo[str1.length][str2.length];
}

/*
Test Cases:
*/

console.log(deletionDistance('hello', 'he') === 3);
console.log(deletionDistance('log', 'dog') === 2);
console.log(deletionDistance('tear', 'tree') === 4);
console.log(deletionDistance('dream', 'drum') === 3);

/*

Approach: Use dynamic programming to create a 2-D matrix and fill in numbers by comparing if the letter in str1 matches the corresponding letter in str2

[   '' h e a t
'' [ 0 1 2 3 4 ],
 h [ 1 0 1 4 5 ],
 i [ 2 3 4 3 4 ],
 t [ 3 4 5 4 3 ]
                ]

*/
