/*

Given an nxn grid, find the number of possible paths you can take to get from the bottom-left most square to the top-right most square.

Must follow 2 rules:
1. Every step needs to maintain i >= j
2. In every step, it may go north one square (up) or go east one square (right)

*/

function findNumOfPaths(n, m, mat) {
  if (n < 0 || m < 0) return 0;
  else if (n < m) mat[n][m] = 0;
  else if (mat[n][m] !== -1) return mat[n][m];
  else if (n === 0 && m === 0) mat[n][m] = 1;
  else mat[n][m] = findNumOfPaths(n, m - 1, mat) + findNumOfPaths(n - 1, m, mat);

  return mat[n][m];
}

function numOfPaths(n) {
  let matrix = [] ;
  for (let i = 0; i < n; i++) { //initialize nxn matrix filled with -1s
    let row = Array(n).fill(-1);
    matrix.push(row);
  }

  return findNumOfPaths(n, n, matrix);
}

console.log(numOfPaths(4) === 5);
console.log(numOfPaths(6) === 42);
console.log(numOfPaths(10) === 4862);
console.log(numOfPaths(2) === 1);
