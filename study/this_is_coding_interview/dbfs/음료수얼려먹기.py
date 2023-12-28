import sys
input = sys.stdin.readline
N,M = list(map(int, input().strip().split()))

graph = []
is_visit = [ [False] * M for i in range(N) ]
dx = [-1,0,1,0]
dy = [0,1,0,-1]
ans = 0
for _ in range(N):
  graph.append(list(map(int,input().strip())))

def dfs(x,y):
  if is_visit[x][y]: return
  is_visit[x][y] = True
  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]
    if nx < 0 or ny < 0 or nx>=N or ny>=M: continue
    if graph[nx][ny]==1 or is_visit[nx][ny]: continue
    dfs(nx,ny)
  return True

for x in range(N):
  for y in range(M):
    if is_visit[x][y] or graph[x][y]==1: continue
    make_one = dfs(x,y)
    if make_one:
      ans+=1
print(ans)