const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");
const [N, M, start] = input[0].split(" ").map(Number);
const map = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
const visitDfs = Array(N).fill(false);
const visitBfs = Array(N).fill(false);

for (let i = 1; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  map[x][y] = 1;
  map[y][x] = 1;
}

let dfsOrder = "";
let bfsOrder = "";
function dfs(v) {
  if (visitDfs[v]) return;
  visitDfs[v] = true;
  dfsOrder += `${v} `;

  const connected = map[v];
  for (let i = 1; i < connected.length; i++) {
    if (i !== v && connected[i]) dfs(i);
  }
}

function bfs(v) {
  const stack = [];
  stack.push(v);
  while (stack.length) {
    const currentVertax = stack.shift();
    if (visitBfs[currentVertax]) continue;
    visitBfs[currentVertax] = true;
    bfsOrder += `${currentVertax} `;
    const connected = [...map[currentVertax]];
    for (let i = 1; i < connected.length; i++) {
      if (connected[i]) stack.push(i);
    }
  }
}
dfs(start);
bfs(start);
console.log(dfsOrder.trim());
console.log(bfsOrder.trim());
