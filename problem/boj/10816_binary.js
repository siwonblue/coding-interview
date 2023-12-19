const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/jeonsiwon/Desktop/coding-interview/code/boj/input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .split("\n");

arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
targetNum = input[3].split(" ").map(Number);

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

function solution() {
  let ans = "";
  for (let i = 0; i < targetNum.length; i++) {
    ans += `${upperBound(targetNum[i]) - lowerBound(targetNum[i])} `;
  }
  console.log(ans.trim());
}
solution();
