/**
 * nCr = n-1Cr-1 + n-1Cr
 * without memoization
 */
function DFS(n, r) {
  if (n === r || r === 0) return 1;
  return DFS(n - 1, r - 1) + DFS(n - 1, r);
}

const n = 33;
const r = 19;
const memo = Array.from({ length: n + 1 }, () => Array(r + 1).fill(0));

function DFS_MEMO(n, r) {
  if (memo[n][r]) return memo[n][r];
  if (n === r || r === 0) return 1;
  return (memo[n][r] = DFS_MEMO(n - 1, r - 1) + DFS_MEMO(n - 1, r));
}
console.log(DFS_MEMO(n, r));
