import sys
input = sys.stdin.readline
N,M = map(int, input().split())
test_graph = [[0]*M for _ in range(N)]
graph = []
dx = [-1,0,1,0]
dy = [0,1,0,-1]
ans = 0
for i in range(N):
  graph.append(list(map(int, input().split())))


# 1. 모든 0에 3개씩 세워본다. (재귀, 백트래킹)
# 2. 세우고 바로 DFS를 돌려서 바이러스 퍼트리고 남은 영역의 개수를 카운트한다. (단순 구현)
def spread_virus(x,y):
  test_graph[x][y] = 2
  for i in range(4):
    nx = x+dx[i]
    ny = y+dy[i]
    if nx<0 or ny<0 or nx>=N or ny>=M:continue
    if test_graph[nx][ny]!=0:continue
    spread_virus(nx,ny) 

def get_area():
  cnt=0
  for i in range(N):
    for j in range(M):
      if test_graph[i][j]==0: cnt+=1
  return cnt


# 바이러스를 전파하고 안전공간의 개수를 센다.
def simulation():
  global ans
  # test_graph에 벽세운 내용 카피
  for i in range(N):
    for j in range(M):
      test_graph[i][j] = graph[i][j]
  
  for i in range(N):
    for j in range(M):
      if test_graph[i][j]==2:
        spread_virus(i,j)
  ans = max(ans,get_area())

def make_wall(count):
  if count==3:
    simulation()
    return
  
  for i in range(N):
    for j in range(M):
      if graph[i][j]==0:
        graph[i][j]=1
        count+=1
        make_wall(count)
        graph[i][j]=0
        count-=1


make_wall(0)