/**
 * n이 주어지고 1부터 N까지 수를 무작위로 나열한다.
 * 그 줄을 첫줄로 한 파스칼의 삼각형 결과 값이 나온다.
 *
 * N과 파스칼의 삼각형 결과값이 주어졌을 때,
 * 첫번째 줄의 수열을 구하라.
 * 1<=N<=11
 */
const N = 4;
const target = 16;
const dp = Array.from({ length: 11 }, () => Array(11).fill(0));
const a = Array.from({ length: N }, () => 0); // 이항 계수 저장
const isUsed = Array.from({ length: N }, () => false); // 순열을 위해 사용했는지 확인하는 저장
const temp = Array.from({ length: N }, () => 0); // 순열 저장
let ans = "";

// 조합 수 구하기
function combi(n, r) {
  if (dp[n][r]) return dp[n][r];
  if (n === r || r === 0) return 1;
  else return (dp[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
}

// 이항 계수 저장
for (let i = 0; i < N; i++) a[i] = combi(N - 1, i);
let flag = false;
// 수열로 경우의 수 확인
function DFS(l) {
  if (flag) return;
  if (l === N) {
    const sum = [...temp]
      .map((num, i) => num * a[i])
      .reduce((acc, cur) => acc + cur, 0);
    if (sum === target) {
      ans = [...temp].join(" ");
      flag = true;
    }
    return;
  }
  for (let i = 0; i < N; i++) {
    if (isUsed[i]) continue;
    isUsed[i] = true;
    temp[l] = i + 1;
    DFS(l + 1);
    isUsed[i] = false;
  }
}
DFS(0, 0);
console.log("답:", ans);
