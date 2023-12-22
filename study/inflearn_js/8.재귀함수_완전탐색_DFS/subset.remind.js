/**
 * 자연수 N이 주어지면 1부터 N까지의 부분집합을 구하는 함수를 만들어라.
 */

const n = 3;
const src = Array.from({ length: n }, (_, i) => i + 1);
let ans = "";
function DFS(level, subset) {
  // 언제 멈출 것인지 정해주는 것이 트리의 높이를 결정한다.
  if (level === n) {
    ans += subset + "\n";
    return;
  }

  // DFS 내부에서 재귀적으로 호출되는 함수의 수가 자식 노드의 개수를 의미한다.
  DFS(level + 1, `${subset} ${src[level]}`);
  DFS(level + 1, subset);
}
DFS(0, "");
console.log(ans.trim());
