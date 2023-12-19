const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const trees = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((com1, com2) => com1 - com2);
let ans = 0;
function binarySearch(source) {
  let start = 1;
  let end = source[source.length - 1];
  let mid;
  while (start <= end) {
    mid = parseInt((start + end) / 2);
    const sum = source.reduce((acc, cur) => {
      if (cur > mid) {
        return acc + cur - mid;
      } else {
        return acc;
      }
    }, 0);
    if (sum >= m) {
      if (mid > ans) ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}
binarySearch(trees);
console.log(ans);
