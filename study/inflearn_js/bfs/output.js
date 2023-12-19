/**
 * until N
 */
const N = 10;
function DFS(n) {
  if (n === N + 1) return;
  console.log(n);
  DFS(n + 1);
}
DFS(1);
