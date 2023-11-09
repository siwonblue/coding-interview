class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  poll() {
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
  bubbleUp() {
    let curIdx = this.heap.length - 1;
    let parrentIdx = Math.floor(curIdx / 2);
    while (
      this.heap[parrentIdx][1] &&
      this.heap[parrentIdx][1] > this.heap[curIdx][1]
    ) {
      this.swap(parrentIdx, curIdx);
      curIdx = parrentIdx;
      parrentIdx = Math.floor(curIdx / 2);
    }
  }
  bubbleDown() {
    let curIdx = 0;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[rightIdx]) {
      if (this.heap[curIdx] && this.heap[curIdx][1] > this.heap[leftIdx][1])
        this.swap(curIdx, leftIdx);
      return;
    }

    while (
      (this.heap[leftIdx] && this.heap[curIdx][1] > this.heap[leftIdx][1]) ||
      (this.heap[rightIdx] && this.heap[curIdx][1] > this.heap[rightIdx][1])
    ) {
      if (
        this.heap[rightIdx] &&
        this.heap[leftIdx][1] >= this.heap[rightIdx][1]
      ) {
        this.swap(curIdx, rightIdx);
        curIdx = rightIdx;
        leftIdx = curIdx * 2;
        rightIdx = curIdx * 2 + 1;
      } else {
        this.swap(curIdx, leftIdx);
        curIdx = leftIdx;
        leftIdx = curIdx * 2;
        rightIdx = curIdx * 2 + 1;
      }
    }
  }
}

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
const K = +input.shift();
const INF = Number.MAX_SAFE_INTEGER;
const graph = Array.from({ length: V + 1 }, () => new MinHeap());
const ans = Array.from({ length: V + 1 }, () => "INF");
const visit = Array.from({ length: V + 1 }, () => 0);
for (let i = 0; i < E; i++) {
  const [start, end, dis] = input[i].split(" ").map(Number);
  graph[start].add([end, dis]);
}

function dijkstra(v, accumulativeDis) {
  // visit
  if (visit[v]) return;
  visit[v] = 1;
  console.log(`${v}까지오는 최단 ${accumulativeDis}`);

  // update
  const connected = graph[v].heap;

  if (connected.length === 0) return;
  for (let i = 0; i < connected.length; i++) {
    const [node, dis] = connected[i];
    if (ans[node] === "INF") {
      ans[node] = dis + accumulativeDis;
      continue;
    }
    if (ans[node] > accumulativeDis + dis) {
      ans[node] = dis + accumulativeDis;
    }
  }

  const [node, dis] = graph[v].poll();
  const next = Math.min(ans[node], dis + accumulativeDis);

  console.log(`${v}  <--${dis}--> ${node} 이동 예정`);
  console.log(`${ans}`);

  console.log(`\n`);
  dijkstra(node, next);
}

function solution() {
  ans[K] = 0;
  dijkstra(K, 0);
  ans.shift();
  console.log(ans.join("\n"));
}
solution();
