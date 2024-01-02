const filePath =
  "/Users/jeonsiwon/Desktop/coding-interview/study/inflearn_js/9.graph_search/input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const graph = [];
const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
const dy = [0, 1, 1, 1, 0, -1, -1, -1];
const isVisit = Array.from({ length: n }, () => Array(n).fill(0));
for (let i = 1; i <= n; i++) graph.push(input[i].trim().split(" ").map(Number));

function BFS(queue) {
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (isVisit[nx][ny] || !graph[nx][ny]) continue;
      isVisit[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
  return true;
}

let ans = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (isVisit[i][j] || !graph[i][j]) continue;
    const q = [[i, j]];
    isVisit[i][j] = true;
    // console.log("방문하는 곳:", i, j);
    if (BFS(q)) ans += 1;
  }
}
console.log(ans);
