const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/jeonsiwon/Desktop/coding-interview/code/boj/input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");
(function solution() {
  const [N, K] = input[0].split(" ").map(Number);
  const W = Array.from({ length: N + 1 }, () => 0);
  const V = Array.from({ length: N + 1 }, () => 0);
  const dp = Array.from({ length: 100001 }, () => 0);
  for (let i = 1; i <= N; i++) {
    const [w, v] = input[i].split(" ").map(Number);
    W[i] = w;
    V[i] = v;
  }
  for (let i = 1; i < W.length; i++) {
    for (let j = K; j >= W[i]; j--) {
      dp[j] = Math.max(dp[j - W[i]] + V[i], dp[j]);
    }
  }
  console.log(dp[K]);
})();
