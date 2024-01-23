# 이중으로 돌면서 검색을 해야한다. 가장 먼저 떠오른 생각인데
# N의 개수가 커서 효율을 고민했다.
# 입력데이터가 정렬이 가능한 구조라면 이분탐색을 고민했겠는데
# 그렇지 않기때문에 해시 테이블 구조를 생각했다.
# hash 테이블에서 값을 조회하는 것이 O(1) 이라는 점을 이용해
# 최종 시간 복잡도 O(N) 으로 문제를 풀이할 수 있다.

def solution(participant, completion):
    answer = ''
    join_hash = {}
    for p in participant:
        if p in join_hash: join_hash[p]+=1 # in 시간복잡도 O(1)
        else: join_hash[p] = 1
    
    for c in completion:
        join_hash[c]-=1 # 해시테이블 검색 시간복잡도 O(1)
    
    for key, value in join_hash.items():
        if value!=0:
          answer=key
          break
    print(answer)
    
    return answer

solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"])