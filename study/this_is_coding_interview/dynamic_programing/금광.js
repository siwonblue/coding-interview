const filePath =
  process.platform === "linux"
    ? "/dex/stdin"
    : "/Users/jeonsiwon/Desktop/coding-interview/study/this_is_coding_interview/dynamic_programing/input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");
let T = +input.shift();

while (T) {
  const [N, M] = input.shift().split(" ").map(Number);
  const raw = input.shift().split(" ").map(Number);
  const dp = Array.from({ length: M + 1 }, () => Array(N).fill(0));
  const graph = [[null]];
  for (let i = 0; i < N * M; i += N) graph.push(raw.slice(i, i + N));
  dp[1] = [...graph[1]];

  for (let i = 2; i <= M; i++) {
    for (let j = 0; j < N; j++) {
      if (j === 0) {
        dp[i][j] = graph[i][j] + Math.max(dp[i - 1][j], dp[i - 1][j + 1]);
      } else if (j === N - 1) {
        dp[i][j] = graph[i][j] + Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
      } else {
        dp[i][j] =
          graph[i][j] +
          Math.max(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]);
      }
    }
  }
  console.log(Math.max(...dp[M]));
  T -= 1;
}
