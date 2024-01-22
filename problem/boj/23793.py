import heapq
import sys
input = sys.stdin.readline
INF = int(1e18)
N,M = map(int, input().split())
graph = [[] for _ in range(N+1)]
for _ in range(M):
  start,end,dis = map(int,input().split())
  graph[start].append((end,dis))
X,Y,Z = map(int,input().split())

def dijkstra(start,end,center):
  table = [INF] * (N+1)
  q = []
  heapq.heappush(q,(start,0))
  table[start] = 0
  while q:
    now, distance = heapq.heappop(q)
    
    # 이미 방문한 것에 대한 예외처리
    if table[now] < distance: continue
    
    for next, next_dis in graph[now]:
      cost = distance + next_dis
      if next!=center:
        if cost < table[next]:
          table[next] = cost
          heapq.heappush(q,(next, cost))
  return table[end]

XY = dijkstra(X,Y,0)
YZ = dijkstra(Y,Z,0)
XZ = dijkstra(X,Z,Y)
first_ans = -1 if XY+YZ==INF else XY+YZ
second_ans = -1 if XZ==INF else XZ

print(first_ans,second_ans)