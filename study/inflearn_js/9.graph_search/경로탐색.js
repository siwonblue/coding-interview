const filePath =
  "/Users/jeonsiwon/Desktop/coding-interview/study/inflearn_js/9.graph_search/input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
let isVisit = Array.from({ length: N + 1 }, () => false);
console.log(isVisit);

for (let i = 1; i <= M; i++) {
  const [s, e] = input[i].split(" ").map(Number);
  graph[s][e] = 1;
}

let cnt = 0;
function DFS(s) {
  if (isVisit[s]) return;
  isVisit[s] = true;

  if (s === 5) {
    cnt += 1;
    return;
  }

  for (let i = 0; i < graph[s].length; i++) {
    if (!graph[s][i] || isVisit[i]) continue;
    DFS(i);
    isVisit[i] = false;
  }
}
DFS(1);
console.log(cnt);
