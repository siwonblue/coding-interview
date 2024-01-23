// 이중으로 돌면서 검색을 해야한다. 가장 먼저 떠오른 생각인데
// N의 개수가 커서 효율을 고민했다.
// 입력데이터가 정렬이 가능한 구조라면 이분탐색을 고민했겠는데
// 그렇지 않기때문에 해시 테이블 구조를 생각했다.
// hash 테이블에서 값을 조회하는 것이 O(1) 이라는 점을 이용해
// 최종 시간 복잡도 O(N) 으로 문제를 풀이할 수 있다.

function solution(participant, completion) {
  var answer = "";
  var joinHash = {};
  for (let i = 0; i < participant.length; i++) {
    const name = participant[i];
    if (name in joinHash) joinHash[name] += 1;
    else joinHash[name] = 1;
  }

  for (let i = 0; i < completion.length; i++) {
    joinHash[completion[i]] -= 1;
  }

  for (const [key, value] of Object.entries(joinHash)) {
    if (value !== 0) {
      answer = key;
      break;
    }
  }

  return answer;
}
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
