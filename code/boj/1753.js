const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/jeonsiwon/Desktop/coding-interview/code/boj/input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");
const [V, E] = input.shift().split(" ").map(Number);
const start = +input.shift();
const graph = Array.from({ length: V }, () => Array(V).fill(0));
const ans = Array.from({ length: V }, () => 0);
const visit = Array.from({ length: V }, () => 0);
const INF = 11;
visit[start - 1] = 1;

for (let i = 0; i < E; i++) {
  const [start, end, distance] = input[i].split(" ").map(Number);
  graph[start - 1][end - 1] = distance;
}

/**
 * find index and distance of shortest node
 */
function findNext(arr, accumulativeDistance) {
  let distance = INF;
  let next;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) continue;
    if (arr[i] <= distance) {
      distance = arr[i];
      next = i;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) continue;
    const newDistance = accumulativeDistance + arr[i];
    if (ans[i] === 0) ans[i] = newDistance;
    if (ans[i] !== 0 && ans[i] > newDistance) ans[i] = newDistance;
  }
  if (distance !== INF) visit[next] = 1;

  return { next, distance };
}

function dijkstra(currentPosition, accumulativeDistance) {
  const connected = graph[currentPosition];
  const { next, distance } = findNext(connected, accumulativeDistance);
  if (distance === INF) return;
  // console.log("next", next);
  // console.log("distance", distance);
  // console.log("\n");
  dijkstra(next, distance);
}

function solution() {
  dijkstra(start - 1, 0);
  ans.map((v, idx) => {
    if (v === 0 && idx !== start - 1) ans[idx] = "INF";
  });
  console.log(ans.join("\n"));
}
solution();
// console.log(visit);
