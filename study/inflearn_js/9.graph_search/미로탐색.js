const filePath =
  "/Users/jeonsiwon/Desktop/coding-interview/study/inflearn_js/9.graph_search/input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");

const graph = [];
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const isVisit = Array.from({ length: 7 }, () => Array(7).fill(0));
for (let i = 0; i < input.length; i++) {
  const row = input[i].split(" ").map(Number);
  graph.push(row);
}
console.table(graph);

let cnt = 0;

function DFS(x, y) {
  if (isVisit[x][y]) return;
  isVisit[x][y] = true;

  if (x === 6 && y === 6) {
    cnt += 1;
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= 7 || ny >= 7) continue;
    if (isVisit[nx][ny] || graph[nx][ny]) continue;
    DFS(nx, ny);
    isVisit[nx][ny] = false;
  }
}
DFS(0, 0);
console.log(cnt);
