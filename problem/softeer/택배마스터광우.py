# 순열 구하고 완전 탐색해야겠다는 생각으로 접근
# 구현에 조금 어려움을 겪음.
# 파이썬은 permutations 라이브러리를 쓰면 좋다는 점 기억



from itertools import permutations
import sys
src = sys.stdin.readline

N,M,K = map(int, input().split())
src = list(map(int, input().split()))

for t in permutations(src,N):
  src = list(t)
  ans = sys.maxsize
  move = 0
  weight = 0
  total = 0
  idx = 0
  while move!=K:
    if weight + src[idx]<=M:
      weight += src[idx]
      src.append(src[idx])
      idx+=1
    else:
      move+=1
      total += weight
      weight=0
  ans = min(total, ans)
print(ans)