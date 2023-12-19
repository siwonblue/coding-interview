const input = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];
const storages = input[1].split(" ").map(Number);

const dp = Array.from({ length: N + 1 }, () => 0);
dp[1] = storages[0];
for (let i = 2; i <= N; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 2] + storages[i - 1]);
}
console.log(dp);
