// 동전교환

const coins = [1, 3, 5];
const target = 15;
let ans = 501;
let cnt = 0;
function DFS(l, sum) {
  if (sum > target) return;
  if (l > ans) return; // dfs cutting edge
  if (sum === target) {
    cnt++;
    ans = Math.min(l, ans);
    return;
  }

  for (let i = 0; i < coins.length; i++) {
    DFS(l + 1, sum + coins[i]);
  }
}
DFS(0, 0);
// console.log(cnt);
console.log(ans);
