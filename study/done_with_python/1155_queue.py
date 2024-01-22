# queue 를 사용하지 않고 풀이하는 방법
import heapq
import sys
input = sys.stdin.readline
N,M = map(int, input().split())
graph = [[] for _ in range(N+1)]
table = [int(1e18)] * (N+1)
for _ in range(M):
  start, end, dis = map(int, input().split())
  graph[start].append((end,dis))
start,end = map(int, input().split())


def dijkstra(start):
  q = []
  heapq.heappush(q,(start,0))
  while q:
    now, distance = heapq.heappop(q)
    if table[now]<distance:continue
    for city,dis in graph[now]:
      cost =  dis + distance
      if cost < table[city]:
        table[city] = cost
        heapq.heappush(q,(city, cost))
dijkstra(start)
print(table)