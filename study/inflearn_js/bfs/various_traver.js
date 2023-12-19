const target = 7;

function DFS(n) {
  if (n > target) return;
  // console.log(n); // pre order traversal
  DFS(n * 2);
  // console.log(n);
  DFS(n * 2 + 1);
  console.log(n);
}

DFS(1);
