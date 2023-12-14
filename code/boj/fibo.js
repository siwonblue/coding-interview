const n = 4000;
const dp = Array.from({ length: n + 1 }, () => 0);
var result = (function fibo(n) {
  if (n <= 0) return;
  if (n === 1 || n === 2) return 1;
  if (dp[n]) return dp[n];
  dp[n] = fibo(n - 1) + fibo(n - 2);
  return dp[n];
})(n);
console.log(`fibo(${n}):`, result);
