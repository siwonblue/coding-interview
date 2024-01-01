/**
 * 경로탐색.js 와 동일한 문제에 대해
 * 인접리스트로 풀이
 */
const filePath =
  "/Users/jeonsiwon/Desktop/coding-interview/study/inflearn_js/9.graph_search/input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
let isVisit = Array.from({ length: N + 1 }, () => false);
for (let i = 1; i <= M; i++) {
  const [s, e] = input[i].split(" ").map(Number);
  graph[s].push(e);
}
let cnt = 0;

function DFS(node) {
  if (isVisit[node]) return;
  isVisit[node] = true;

  if (node === 5) {
    cnt += 1;
    return;
  }

  for (let i = 0; i < graph[node].length; i++) {
    if (isVisit[graph[node][i]]) continue;
    DFS(graph[node][i]);
    isVisit[graph[node][i]] = false;
  }
}
DFS(1);
console.log(cnt);
