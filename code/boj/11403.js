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

function DFS(i, visit) {
  const conneted = maps[i];
  for (let next = 0; next < conneted.length; next++) {
    if (!conneted[next]) continue;
    if (visit[next]) continue;
    visit[next] = 1;
    DFS(next, visit);
  }
}

function solution() {
  let ans = "";
  for (let i = 0; i < N; i++) {
    const visit = Array.from({ length: N }, () => 0);
    DFS(i, visit);
    for (let j = 0; j < N; j++) ans += `${visit[j]} `;
    ans += "\n";
  }
  console.log(ans);
}
solution();
