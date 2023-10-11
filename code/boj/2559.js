const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");
const [N, K] = input.shift().split(" ").map(Number);
const temperatures = input.shift().split(" ").map(Number);
// get accumulative sum of temperatures
const accumulativeSum = [];
temperatures.forEach((temp, idx) => {
  if (idx === 0) accumulativeSum[idx] = temp;
  else accumulativeSum[idx] = temp + accumulativeSum[idx - 1];
});

const ans = [];
for (let i = 0; i <= N - K; i++) {
  if (i === 0) ans.push(accumulativeSum[i + K - 1]);
  else ans.push(accumulativeSum[i + K - 1] - accumulativeSum[i - 1]);
}
console.log(Math.max(...ans));
