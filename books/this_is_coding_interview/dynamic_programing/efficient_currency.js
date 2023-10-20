const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const coins = input.map(Number);
const dp = Array.from({ length: M + 1 }, () => 0);

function solution(cash, depth) {
  const queue = [{ cash, depth }]; // TODO : use custom class queue if any performance issue
  dp[cash] = 1;
  let ans = -1;
  while (queue.length > 0) {
    const { cash, depth } = queue.shift();
    if (cash < 0) continue;
    if (cash === 0) {
      ans = depth;
      return ans;
    }

    for (let i = 0; i < N; i++) {
      const next = cash - coins[i];
      if (dp[next]) continue;
      dp[next] = 1;
      queue.push({ cash: next, depth: depth + 1 });
    }
  }
  return ans;
}

console.log("정답", solution(15, 0));
