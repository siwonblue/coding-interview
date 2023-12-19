const len = 6;
const src = [1, 3, 5, 6, 7, 10];
const total = src.reduce((acc, cur) => acc + cur);

let ans = "NO";
let flag = false;
function DFS(Level, sum) {
  if (flag) return;
  if (Level === src.length) {
    if (total - sum === sum) {
      ans = "YES";
      flag = true;
    }
    return;
  }
  DFS(Level + 1, sum + src[Level]);
  DFS(Level + 1, sum);
}
DFS(0, 0);
console.log(ans);
