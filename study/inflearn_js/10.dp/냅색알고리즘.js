// 동전교환 문제
// 냅색 알고리즘 기초

const filePath =
  "/Users/jeonsiwon/Desktop/coding-interview/study/inflearn_js/10.dp/input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");
const [N] = input.shift().split(" ").map(Number);
const coins = input.shift().split(" ").map(Number);
const target = +input.shift();

const dp = Array.from({ length: target + 1 }, () => 1000);
dp[0] = 0;

for (let i = 0; i < coins.length; i++) {
  const coin = coins[i];
  console.log(coin);
  for (let j = coin; j <= target; j++) {
    dp[j] = Math.min(dp[j], dp[j - coin] + 1);
  }
  console.log(`${coin}일때 dp 테이블 업데이트\n`);
  console.table(dp);
}
console.log(dp);
