const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];
const maps = [];
for (let i = 1; i <= N; i++) {
  maps.push(input[i].split(" ").map(Number));
}

function deepCopy(maps) {
  const deepCopy = [];
  for (let i = 0; i < maps.length; i++) {
    deepCopy.push([...maps[i]]);
  }
  return deepCopy;
}

function BFS(i, j) {
  const visit = Array.from({ length: N }, () => false);

  const queue = [];
  const row = maps[i];
  for (let i = 0; i < row.length; i++) {
    if (!row[i]) continue;
    queue.push(i);
  }

  while (queue.length) {
    const cur = queue.shift();
    visit[cur] = true;
    const nextRow = maps[cur];
    for (let j = 0; j < nextRow.length; j++) {
      if (!nextRow[j]) continue;
      if (visit[j]) continue;
      queue.push(j);
    }
  }
  return visit[j];
}

function solution() {
  let ans = "";
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const check = BFS(i, j);
      if (check) ans += "1 ";
      else ans += "0 ";
    }
    ans.trim();
    ans += "\n";
  }

  console.log(ans);
}
solution();
