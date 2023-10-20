import sys
from collections import deque

[N,M] = map(int, sys.stdin.readline().split())
coins = []
for i in range(N):
  coins.append(int(sys.stdin.readline().rstrip()))
ans = -1

def solution(cash, depth):
  global ans
  dp = [0] * (M+1)
  dp[cash] = 1
  queue = deque([(cash, depth)])
  while queue:
    cash, depth = queue.popleft()
    if cash<0:continue
    if cash==0:
      ans = depth
      return ans
      
    for i in range(N):
      next = cash - coins[i]
      if dp[next]: continue
      dp[next] = 1
      queue.append((next, depth+1))
  return ans

print(solution(M,0))