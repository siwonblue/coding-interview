class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  extract() {
    if (!this.size()) return;
    if (this.size() === 1) {
      const value = this.heap[0];
      this.heap = [];
      return value;
    }
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
  bubbleUp() {
    let curIdx = this.size() - 1;
    let parrentIdx = Math.floor((curIdx - 1) / 2);
    while (curIdx > 0 && this.heap[curIdx][1] < this.heap[parrentIdx][1]) {
      this.swap(curIdx, parrentIdx);
      curIdx = parrentIdx;
      parrentIdx = Math.floor((curIdx - 1) / 2);
    }
  }
  bubbleDown() {
    let curIdx = 0;
    let leftIdx = curIdx * 2 + 1;
    let rightIdx = curIdx * 2 + 2;

    while (
      (this.heap[rightIdx] && this.heap[curIdx][1] > this.heap[rightIdx][1]) ||
      (this.heap[leftIdx] && this.heap[curIdx][1] > this.heap[leftIdx][1])
    ) {
      // 왼쪽 자식만 있는 경우
      if (!this.heap[rightIdx]) {
        this.swap(curIdx, leftIdx);
        return;
      }

      // 둘다 모두 작은 경우
      if (
        this.heap[rightIdx][1] < this.heap[curIdx][1] &&
        this.heap[leftIdx][1] < this.heap[curIdx][1]
      ) {
        const smallerIdx =
          this.heap[leftIdx][1] < this.heap[rightIdx][1] ? leftIdx : rightIdx;
        this.swap(smallerIdx, curIdx);
        curIdx = smallerIdx;
        leftIdx = curIdx * 2 + 1;
        rightIdx = curIdx * 2 + 2;
        continue;
      }

      // 둘중 오른쪽만 더 작은 경우
      if (
        this.heap[rightIdx][1] < this.heap[curIdx][1] &&
        this.heap[leftIdx][1] > this.heap[curIdx][1]
      ) {
        this.swap(curIdx, rightIdx);
        curIdx = rightIdx;
        leftIdx = curIdx * 2 + 1;
        rightIdx = curIdx * 2 + 2;
        continue;
      }

      // 둘중 왼쪽만 더 작은 경우
      if (
        this.heap[rightIdx][1] > this.heap[curIdx][1] &&
        this.heap[leftIdx][1] < this.heap[curIdx][1]
      ) {
        this.swap(curIdx, leftIdx);
        curIdx = leftIdx;
        leftIdx = curIdx * 2 + 1;
        rightIdx = curIdx * 2 + 2;
        continue;
      }
    }
  }
}
const INF = Number.MAX_SAFE_INTEGER;
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

const graph = Array.from({ length: V + 1 }, () => []);
const ans = Array.from({ length: V + 1 }, () => INF);

for (let i = 0; i < E; i++) {
  const [start, end, dis] = input[i].split(" ").map(Number);
  graph[start].push([end, dis]);
}

function dijkstra(v) {
  const pq = new MinHeap();
  pq.add([K, 0]);
  while (pq.heap.length) {
    const [cur, cost] = pq.extract();
    for (let i = 0; i < graph[cur].length; i++) {
      const [node, nCost] = graph[cur][i];
      if (ans[node] > cost + nCost) {
        ans[node] = cost + nCost;
        pq.add([node, ans[node]]);
      }
    }
  }
}

function solution() {
  ans[K] = 0;
  dijkstra(K);
  ans.shift();
  let str = "";
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] === INF) str += "INF ";
    else str += `${ans[i]} `;
  }
  console.log(str.split(" ").join("\n").trim());
}
solution();
