const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/jeonsiwon/Desktop/coding-interview/code/boj/input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");
const [N, M, R] = input.shift().split(" ").map(Number);
const maps = Array.from({ length: N + 1 }, () => []);
const visit = Array.from({ length: N + 1 }, () => 0);
const ans = Array.from({ length: N + 1 }, () => 0);
let cnt = 1;
visit[R] = cnt;
for (let i = 0; i < M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  maps[start].push(end);
  maps[end].push(start);
}
maps.map((v) => v.sort((a, b) => a - b));

function DFS(v) {
  ans[v] = cnt++;
  const connected = maps[v];
  for (let i = 0; i < connected.length; i++) {
    const cur = connected[i];
    if (visit[cur]) continue;
    visit[cur] = 1;
    DFS(cur);
  }
}

function solution() {
  DFS(R);
  ans.shift();
  console.log(ans.join("\n"));
}
solution();
// console.log(maps);
