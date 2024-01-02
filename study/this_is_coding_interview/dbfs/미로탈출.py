import sys
input = sys.stdin.readline
N,M = list(map(int, input().strip().split()))

graph = []
is_visit = [ [False] * M for i in range(N) ]
dx = [-1,0,1,0] # 상하좌우
dy = [0,1,0,-1] # 상하좌우

ans = 40000
for _ in range(N):
  graph.append(list(map(int,input().strip())))

def dfs(x,y,dis):
  global ans
  if is_visit[x][y]: return
  is_visit[x][y] = True
  
  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]
    if (nx<0 or ny<0 or nx>=N or ny>=M ): continue
    if(is_visit[nx][ny] or graph[nx][ny]==0): continue
    if (nx==N-1 and ny==M-1):
      ans = min(ans,dis+1)
      return
    dfs(nx,ny,dis+1)

dfs(0,0,1)
print(ans)