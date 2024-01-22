function lowerBound(target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return start;
}

function upperBound(target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] <= target) start = mid + 1;
    else end = mid - 1;
  }
  return start;
}
