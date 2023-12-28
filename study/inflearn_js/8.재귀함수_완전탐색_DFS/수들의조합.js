/**
 * N개의 수가 주어지면 k개를 조합으로 뽑는다.
 * 조합의 합이 m의 배수인 경우의 수를 구하라.
 */

const arr = [2, 4, 5, 8, 12];
const k = 3;
const m = 6;

const ans = Array.from({ length: k }, () => 0);
let cnt = 0;
function DFS(l, s) {
  if (l === k) {
    const sum = [...ans].reduce((acc, cur) => acc + cur, 0);
    if (sum % 6 === 0) {
      console.log(ans);
      cnt += 1;
    }
    return;
  }

  for (let i = s; i < arr.length; i++) {
    ans[l] = arr[i];
    DFS(l + 1, i + 1);
  }
}
DFS(0, 0);
console.log(cnt);
