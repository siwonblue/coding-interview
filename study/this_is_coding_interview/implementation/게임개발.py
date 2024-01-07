[N, M]= list(map(int,input().split()))
[x, y, dir] = list(map(int,input().split()))

visit = [ [False] * M for i in range(N)]
graph = []
for i in range(N):
  graph.append(list(map(int,input().split())))

dx = [-1,0,1,0]
dy = [0,1,0,-1]
ans = 0

def turn_left():
  global dir
  dir-=1
  if dir==-1: dir=3  

turn_cnt=0
while True:
  turn_left()
  nx = x + dx[dir]
  ny = y + dy[dir]
  if nx <0 or ny < 0 or nx >= N or ny >= M: continue
  if visit[nx][ny]==False and graph[nx][ny]==0 :
    x = nx
    y = ny
    visit[x][y] = True
    ans+=1
    turn_cnt=0
    continue
  else: turn_cnt+=1
  if turn_cnt==4:
    # 뒤쪽이 못 움직일 경우 break
    nx = x - dx[dir]
    ny = y - dy[dir]
    if graph[nx][ny]==0:
      x = nx
      y = ny
    else: break
    turn_cnt=0

print(ans)