const arr = [1, 3, 5, 6, 7, 10];
function solution() {
  const check = Array.from({ length: arr.length + 1 });
  const totalSum = arr.reduce((acc, cur) => acc + cur, 0);
  let answer = "NO";
  function DFS(L) {
    if (answer === "YES") return;
    if (L === arr.length + 1) {
      let sum = 0;
      for (let i = 1; i <= check.length; i++) {
        if (check[i]) sum += arr[i - 1];
      }
      if (totalSum / 2 === sum) answer = "YES";
      return;
    }

    check[L] = true;
    DFS(L + 1);
    check[L] = false;
    DFS(L + 1);
  }
  DFS(1);
  return answer;
}

console.log(solution());
