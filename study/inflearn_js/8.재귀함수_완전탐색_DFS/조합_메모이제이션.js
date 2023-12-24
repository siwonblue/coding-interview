const n = 33;
const r = 19;
const dp = Array.from({ length: n + 1 }, () => Array(r + 1).fill(0));
function DFS(n, r) {
  if (dp[n][r]) return dp[n][r];
  if (n === r || r === 0) return 1;
  else return (dp[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
}
console.log(DFS(n, r));
