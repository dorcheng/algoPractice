/*

Winter is coming! Your first job during the contest is to design a standard heater with fixed warm radius to warm all the houses.

Now, you are given positions of houses and heaters on a horizontal line, find out minimum radius of heaters so that all houses could be covered by those heaters.

So, your input will be the positions of houses and heaters seperately, and your expected output will be the minimum radius standard of heaters.

Note:

1. Numbers of houses and heaters you are given are non-negative and will not exceed 25000.
2. Positions of houses and heaters you are given are non-negative and will not exceed 10^9.
3. As long as a house is in the heaters' warm radius range, it can be warmed.
4. All the heaters follow your radius standard and the warm radius will the same.

Example 1:

Input: [1,2,3],[2]
Output: 1

Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.

Example 2:

Input: [1,2,3,4],[1,4]
Output: 1

Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed

*/

const findRadius = function(houses, heaters) {
  houses.sort(function (a, b) {
      return a - b;
  });
  heaters.sort(function (a, b) {
      return a - b;
  });
  let currHeater = 0; // closest heater
  let radius = 0;

  for (let i = 0; i < houses.length; i++){
      while (heaters[currHeater + 1] && houses[i] > Math.floor((heaters[currHeater] + heaters[currHeater + 1]) / 2)){
          currHeater++;
      }
      radius = Math.max(radius, Math.abs(heaters[currHeater] - houses[i]));
  }
  return radius;
};

/*
Test Cases:
*/

console.log(findRadius([1, 2, 3, 4], [1, 4]) === 1);
console.log(findRadius([4, 8, 2, 9, 10, 6], [3, 7, 4]) === 3);
console.log(findRadius([100, 53, 60, 295, 639, 2, 0], [6, 88, 45]) === 551);
console.log(findRadius([282475249, 622650073, 984943658, 144108930, 470211272, 101027544, 457850878, 458777923], [823564440, 115438165, 784484492, 74243042, 114807987, 137522503, 441282327, 16531729, 823378840, 143542612]) === 161834419);


// Can also sort using quick sort for O(N log N)

const quickSort = function(arr, left, right) {
  left = left || 0;
  right = right || arr.length - 1;
  let pivot = partition(arr, left, right);

  if (left < pivot - 1) {
    quickSort(arr, left, pivot - 1);
  }
  if (right > pivot) {
    quickSort(arr, pivot, right);
  }
};

const partition = function(arr, left, right) {
  let pivot = Math.floor((left + right) / 2);

  while (left <= right) {
    while (arr[left] < arr[pivot]) {
      left++;
    }
    while (arr[right] > arr[pivot]) {
      right--;
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
};
