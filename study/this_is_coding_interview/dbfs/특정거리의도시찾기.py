from collections import deque
import sys
input = sys.stdin.readline
N,M,K,X = map(int, input().split())
# print(N,M,K,X)

ans = []
visit = [False] * (N+1)
graph = [[] for _ in range(N+1)]

# print(graph)
for _ in range(M):
  start,end = list(map(int, input().split()))
  graph[start].append(end)

stack = deque([[X,0]])

while len(stack):
  now, accumulated_dis = stack.popleft()
  if visit[now]:continue
  visit[now] = True

  if accumulated_dis==K: ans.append(now)

  for next in graph[now]:
    stack.append([next,accumulated_dis+1])

if len(ans)==0:
  print(-1)
else:
  ans.sort()
  for pos in ans:
    print(pos)
    