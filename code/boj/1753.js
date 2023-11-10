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
      this.heap[parrentIdx] &&
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
const graph = Array.from({ length: V + 1 }, () => []);
const ans = Array.from({ length: V + 1 }, () => "INF");

for (let i = 0; i < E; i++) {
  const [start, end, dis] = input[i].split(" ").map(Number);
  graph[start].push([end, dis]);
}

function dijkstra(v) {
  const pq = new MinHeap();
  pq.add([K, 0]);
  while (pq.heap.length) {
    const [curNode, accumulativeDis] = pq.poll();
    console.log(pq.heap);
    const connected = graph[curNode];
    for (let i = 0; i < connected.length; i++) {
      const [node, dis] = connected[i];
      // console.log(`${curNode}에 연결된 ${dis} 거리의${node}`);
      if (ans[node] === "INF") ans[node] = accumulativeDis + dis;
      else if (ans[node] > accumulativeDis + dis) {
        ans[node] = accumulativeDis + dis;
        // pq.add([node, accumulativeDis + dis]);
      }
    }
  }
}

function solution() {
  ans[K] = 0;
  dijkstra(K);

  // console.log(ans.join("\n"));
}
solution();
