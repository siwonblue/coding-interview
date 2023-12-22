// 바둑이 승차
/**
 * 부분집합 문제랑 완전히 같음
 */

const limit = 259;
const len = 5;
const src = [81, 58, 42, 33, 61];
let ans = 0;
function DFS(level, sum) {
  // 예외처리
  if (sum > limit) return;

  // 트리의 높이를 결정하는 중지조건
  if (level === len) {
    if (sum <= limit) ans = Math.max(ans, sum);
    return;
  }

  // 재귀적으로 호출되는 함수의 개수가 트리구조에서 자식 노드의 개수다.
  DFS(level + 1, sum + src[level]);
  DFS(level + 1, sum);
}

DFS(0, 0);
console.log(ans);
