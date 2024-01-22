# queue 를 사용하지 않고 풀이하는 방법

import sys
input = sys.stdin.readline
N,M = map(int, input().split())
graph = [[] for _ in range(N+1)]
visit = [False] * (N+1)
table = [int(1e18)] * (N+1)
for _ in range(M):
  start, end, dis = map(int, input().split())
  graph[start].append((end,dis))
start,end = map(int, input().split())

def get_shortest_node():
  city = 0
  min_value = int(1e18)
  for idx, value in enumerate(table):
    if value==0:continue 
    if value < min_value and visit[idx]==False:
      min_value = value
      city = idx
  return city

def dijkstra(start):
  table[start] = 0
  visit[start] = True
  
  # 시작점에 연결된 모든 노드 테이블에 업데이트
  for i in graph[start]:
    table[i[0]] = i[1]

  for _ in range(N-1):
    city = get_shortest_node()
    visit[city] = True
    for j in graph[city]:
      cost = table[city] + j[1]
      if cost < table[j[0]]:
        table[j[0]] = cost
  

dijkstra(5)
print(table)
  

