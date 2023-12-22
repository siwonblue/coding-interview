/**
 * arr에서 m개를 뽑아서 중복순열을 만들어라.
 */
const arr = [1, 2, 3, 4];
const m = 3;
let answer = "";

function DFS(l, ans) {
  if (l === m) {
    cnt++;
    answer += ans + "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    DFS(l + 1, !ans ? arr[i] : `${ans} ${arr[i]}`);
  }
}
DFS(0, "");
console.log(answer.trim());
