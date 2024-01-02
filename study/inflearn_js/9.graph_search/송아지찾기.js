const filePath =
  "/Users/jeonsiwon/Desktop/coding-interview/study/inflearn_js/9.graph_search/input.txt";
const [start, end] = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const isVisit = Array.from({ length: 10001 }, () => 0);

function BFS() {
  while (queue.length) {
    const cur = queue.shift();

    for (next of [cur + 1, cur - 1, cur + 5]) {
      if (next <= 0 || isVisit[next]) continue;
      if (next === end) return isVisit[cur] + 1;
      isVisit[next] = isVisit[cur] + 1;
      queue.push(next);
    }
  }
}

const queue = [start];
console.log(BFS());
