const n = 3;
function solution() {
  let answer = [];
  let check = Array.from({ length: n + 1 });
  function DFS(L) {
    if (L === n + 1) {
      let subset = "";
      for (let i = 1; i <= check.length; i++) {
        if (check[i]) subset += `${i} `;
      }
      subset && answer.push(subset.trim());
      return;
    }

    check[L] = true;
    DFS(L + 1);
    check[L] = false;
    DFS(L + 1);
  }
  DFS(1);
  console.log(answer);
}
solution();
