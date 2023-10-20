const N = +require("fs").readFileSync("./input.txt", "utf-8").toString().trim();

const dp = Array.from({ length: N + 1 }, () => 0);
dp[1] = 1;
dp[2] = 3;
for (let i = 3; i <= N; i++) dp[i] = dp[i - 1] + dp[i - 2] * 2;
console.log(dp);
