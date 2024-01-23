// 플로이드 워셜
const filePath =
  "/Users/jeonsiwon/Desktop/coding-interview/study/this_is_coding_interview/shortest/input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const INF = 1e8;
const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(INF));
for (let i = 0; i < M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  graph[start][end] = 1;
  graph[end][start] = 1;
}
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (i === j) graph[i][j] = 0;
  }
}
const [X, K] = input[input.length - 1].split(" ").map(Number);
// console.table(graph);

// 플로이드 워셜 알고리즘
for (let k = 1; k <= N; k++) {
  for (let a = 1; a <= N; a++) {
    for (let b = 1; b <= N; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}

console.table(graph);
if (graph[1][K] === INF || graph[K][X] === INF) console.log(-1);
else console.log(graph[1][K] + graph[K][X]);
