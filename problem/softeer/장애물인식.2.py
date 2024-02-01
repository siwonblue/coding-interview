import sys
from collections import deque

n = int(sys.stdin.readline())
d = [[-1,0],[0,1],[1,0],[0,-1]]
graph = [list(map(int,list(input()))) for _ in range(n)]
is_visit = [[False]*(n) for _ in range(n)]



def bfs(r,c):
  q = deque()
  q.append([r,c])
  is_visit[r][c] = True
  cnt=1

  while q:
    r,c = q.popleft()
    for i in range(4):
      nr = r + d[i][0]
      nc = c + d[i][1]
      if nr<0 or nr>=n or nc<0 or nc>=n:continue
      if is_visit[nr][nc] or graph[nr][nc]==0 :continue

      cnt+=1
      is_visit[nr][nc] = True
      q.append([nr,nc])
  return cnt

ans = []
for r in range(n):
  for c in range(n):
    if is_visit[r][c] or graph[r][c]==0:continue
    ans.append(bfs(r,c))
      
print(len(ans))
ans.sort()
for a in ans:
  print(a)

    



