const target = 10;
let answer = "";
function DFS(N) {
  if (N === 0) return;
  DFS(parseInt(N / 2));
  answer += `${N % 2}`;
}
DFS(11);
console.log(answer);
