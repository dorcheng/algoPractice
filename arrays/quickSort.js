const quickSort = function(arr, start, end) {
  if (start < end) {
    const partitionIdx = partition(arr, start, end);
    quickSort(arr, start, partitionIdx - 1)
    quickSort(arr, partitionIdx + 1, end)
  }
}

const partition = function(arr, start, end) {
  let partitionIdx = start;
  const pivot = arr[end];

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      [arr[partitionIdx], arr[j]] = [arr[j], arr[partitionIdx]]
      partitionIdx++;
    }
  }

  [arr[partitionIdx], arr[end]] = [arr[end], arr[partitionIdx]]

  return partitionIdx;
}

// Example Test

let arr = [7,1,8,5,9,3,4,2]
quickSort(arr, 0, arr.length - 1);
console.log(arr)
