const arr = [1, 2, 3, 4, 5];
const target = 3;
function binary() {
  let start = 0;
  let end = arr.length - 1;
  let mid = -1;
  while (start <= end) {
    mid = parseInt((start + end) / 2, 10);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
}
console.log(binary());
