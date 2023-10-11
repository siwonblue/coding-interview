const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");

const [N, M, K, start] = input.shift().split(" ").map(Number);
const map = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
const visit = Array(N + 1).fill(false);

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  map[x][y] = 1;
}

const stack = [{ vertax: start, distance: 0 }];
visit[start] = true;
let ans = [];
function bfs(stack) {
  while (stack.length) {
    const { vertax: currentVertax, distance } = stack.shift();
    if (distance === K) ans.push(currentVertax);
    const connected = [...map[currentVertax]];
    for (let i = 1; i < connected.length; i++) {
      if (!connected[i]) continue;
      if (visit[i]) continue;
      stack.push({ vertax: i, distance: distance + 1 });
      visit[i] = true;
    }
  }
}
bfs(stack);
console.log(
  ans.length === 0
    ? -1
    : ans
        .sort((a, b) => a - b)
        .join(" ")
        .trim()
);
