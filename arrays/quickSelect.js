const quickSelect = function(arr, start, end, k) {
  if (arr.length === 0 || k === 0 || k > arr.length) return null;
  
  const partitionIdx = partition(arr, start, end);

  if (partitionIdx === k - 1) return arr[partitionIdx];
  else if (partitionIdx > k - 1) return quickSelect(arr, start, partitionIdx - 1, k);
  else return quickSelect(arr, partitionIdx + 1, end, k);
}

const partition = function(arr, start, end) {
  let partitionIdx = start;
  let pivotValue = arr[end];

  for (let j = start; j < end; j++) {
    if (arr[j] < pivotValue) {
      [arr[partitionIdx], arr[j]] = [arr[j], arr[partitionIdx]];
      partitionIdx++;
    }
  }

  [arr[partitionIdx], arr[end]] = [arr[end], arr[partitionIdx]];

  return partitionIdx;
}

/*
Example Tests:
Using quickselect to get kth smallest element
*/

const arr1 = [6,1,8,5,9,4,2]
const arr2 = [7,6,1,8,5,9,4,3]
const arr3 = [3,3,1,8,5,9,4,3]
const arr4 = []
const arr5 = [4,2,7,8,5]
const arr6 = [4]

console.log(quickSelect(arr1, 0, arr1.length - 1, 3)) // 4
console.log(quickSelect(arr2, 0, arr2.length - 1, 5)) // 6
console.log(quickSelect(arr2, 0, arr2.length - 1, 6)) // 7
console.log(quickSelect(arr3, 0, arr3.length - 1, 3)) // 3
console.log(quickSelect(arr4, 0, arr4.length - 1, 1)) // null
console.log(quickSelect(arr5, 0, arr5.length - 1, 9)) // null
console.log(quickSelect(arr6, 0, arr6.length - 1, 1)) // 4
