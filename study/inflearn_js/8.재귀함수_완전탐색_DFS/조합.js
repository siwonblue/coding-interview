/**
 * 1부터 n까지 m개의 수를 뽑은 조합
 */

const n = 5;
const m = 2;
const ans = Array.from({ length: m }, () => 0);

function combi(l, s) {
  if (l === m) {
    console.log(ans);
    return;
  }
  for (let i = s; i <= n; i++) {
    ans[l] = i;
    combi(l + 1, i + 1);
  }
}
combi(0, 1);
