/**
 * 최대점수 구하기 DFS
 */
const filePath =
  "/Users/jeonsiwon/Desktop/coding-interview/study/inflearn_js/8.재귀함수_완전탐색_DFS/input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const scores = [];
const times = [];
for (let i = 1; i <= N; i++) {
  const [s, t] = input[i].split(" ").map(Number);
  scores.push(s);
  times.push(t);
}
let ans = 0;
function DFS(l, score, time) {
  if (time > M) return;
  if (l === N) {
    ans = Math.max(score, ans);
    return;
  }
  DFS(l + 1, score + scores[l], time + times[l]);
  DFS(l + 1, score, time);
}
DFS(0, 0, 0);

console.log(ans);
