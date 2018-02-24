/*

0/1 Knapsack Problem

*/

function knapsack(values, weights, max) {
  let sumOfWeights = Array.from(Array(max + 1).keys());
  let results = [];
  for (let i = 0; i < values.length; i++) { // build out matrix
    let row = Array(sumOfWeights.length);
    results.push(row);
  }
  for (let i = 0; i < results.length; i++) {
    for (let j = 0; j < max + 1; j++) {
      if (j === 0) {
        results[i][j] = j;
      } else if (i === 0 && weights[i] > sumOfWeights[j]) {
        results[i][j] = 0;
      } else if (i === 0 && weights[i] <= sumOfWeights[j]) {
        results[i][j] = values[i];
      } else if (weights[i] > sumOfWeights[j]) { //if i or j don't equal 0
        results[i][j] = results[i - 1][j];
      } else if (weights[i] <= sumOfWeights[j]) { //if i or j don't equal 0
        results[i][j] = Math.max(results[i - 1][j], values[i] + results[i - 1][sumOfWeights[j] - weights[i]]);
      }
    }
  }
  //check which items were brought
  let items = [];
  let i = results.length - 1;
  let j = sumOfWeights.length - 1;
  while (results[i][j] !== 0) {
    if (results[i][j] !== results[i - 1][j]) {
      items.push(i + 1);
      j = sumOfWeights[j] - weights[i];
    } else {
      i = i - 1;
    }
  }
  return `Max Value: ${results[results.length - 1][sumOfWeights.length - 1]}, items: ${items}`; //max value & items
}

/*
Test Cases:
*/

console.log(knapsack([1, 4, 4, 5, 7], [1, 2, 3, 4, 5], 9));
