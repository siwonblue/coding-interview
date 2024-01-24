# 양방향 그래프라고 가정

N,M = map(int, input().split())
INF = int(1e8)
graph = [[INF]*(N+1) for _ in range(N+1)]
for _ in range(M):
  a,b=map(int, input().split())
  graph[a][b] = 1

for i in range(1,N+1):
  for j in range(1,N+1):
    if i==j : graph[i][j] = 0

for k in range(1,N+1):
  for a in range(1,N+1):
    for b in range(1,N+1):
      graph[a][b] = min(graph[a][b], graph[a][k]+graph[k][b])

ans = 0
for i in range(1,N+1):
  cnt=0
  for j in range(1,N+1):
    if i==j:continue
    if graph[i][j]!=INF or graph[j][i]!=INF: cnt+=1
  print(i,cnt)
  if cnt==N-1: ans+=1
print(ans)