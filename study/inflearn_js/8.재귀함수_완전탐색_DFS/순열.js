/**
 * arr 에서 m 개를 뽑아 만든 순열을 모두 나열하라.
 */

const arr = [1, 2, 3, 4, 5];
const m = 3;

const check = Array.from({ length: arr.length }, () => false);
const temp = Array.from({ length: m }, () => 0);
let ans = "";
// console.log(check);
// console.log(temp);

function DFS(l) {
  if (l === m) {
    cnt++;
    ans += [...temp].join(" ") + "\n";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (check[i]) continue;
    check[i] = true;
    temp[l] = arr[i];
    DFS(l + 1);
    check[i] = false;
  }
}
DFS(0);
console.log(ans.trim());
