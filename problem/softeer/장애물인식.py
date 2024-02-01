import sys
N = int(input())
graph = []
cnt = 0
ans = []
visit = [[False] * (N) for _ in range(N)]
dx = [-1,0,1,0]
dy = [0,1,0,-1]
for _ in range(N):
  graph.append(list(map(int,list(input()))))

def dfs(x,y,cnt):
  global start
  if visit[x][y]: return
  visit[x][y] = True
  start +=1
  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]
    if nx<0 or nx>=N or ny<0 or ny>=N:continue
    if graph[nx][ny]==0:continue
    dfs(nx,ny,cnt+1)
  return True

for i in range(N):
  for j in range(N):
    if visit[i][j] or graph[i][j]==0:continue
    start = 0
    if dfs(i,j,1):
      ans.append(start)
      cnt+=1

print(cnt)
ans=sorted(ans)
for n in ans:
  print(n)