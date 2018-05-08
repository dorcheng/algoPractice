/*

Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

For example:

const cakeTypes = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value: 15},
];

const capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);
// returns 555 (6 of the middle type of cake and 1 of the last type of cake)

*/

function maxDuffelBagValue(cakeTypes, capacity) {
  let maxVals = new Array(capacity + 1).fill(0);
  for (let currCapacity = 1; currCapacity < maxVals.length; currCapacity++) {
    let maxVal = 0;
    for (let cakeType = 0; cakeType < cakeTypes.length; cakeType++) {
      if (cakeTypes[cakeType].weight <= currCapacity) {
        let currVal = cakeTypes[cakeType].value + maxVals[currCapacity - cakeTypes[cakeType].weight];
        maxVal = Math.max(currVal, maxVal);
      }
    }
    maxVals[currCapacity] = maxVal;
  }
  return maxVals[capacity];
}

/*
Tests
*/

const cakeTypes = [
  {weight: 1, value: 1},
  {weight: 3, value: 4},
  {weight: 4, value: 5},
  {weight: 5, value: 7}
];

const capacity = 7;

console.log(maxDuffelBagValue(cakeTypes, capacity) === 9);
