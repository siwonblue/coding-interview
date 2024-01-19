import sys
input = sys.stdin.readline

N,K = list(map(int, input().split()))
graph = []
dr = [-1,0,1,0]
dc = [0,1,0,-1]
for _ in range(N):
  graph.append(list(map(int, input().split())))
S,X,Y = list(map(int, input().split()))


def spread():
  temp = [[0]*N for _ in range(N)]
  
  # 복사
  for i in range(N):
    for j in range(N):
      temp[i][j] = graph[i][j]
  
  # 스프레드
  for r in range(N):
    for c in range(N):
      if graph[r][c] ==0: continue

      grade = temp[r][c]
      for i in range(4):
        nr = r + dr[i]
        nc = c + dc[i]
        if nr<0 or nc<0 or nr>=N or nc>=N: continue
        # 0이 아닐 때, 기존에 있던 애를 건드려서도 안됨.
        if graph[nr][nc]!=0:continue

        if temp[nr][nc]==0:
          temp[nr][nc] = grade
          continue

        if grade < temp[nr][nc] :
          temp[nr][nc] = grade

  # 업데이트
  for i in range(N):
    for j in range(N):
      graph[i][j] = temp[i][j]

def sol(S,X,Y):
  cnt=0
  while True:  # K 
    spread() # NN
    cnt+=1
    if(cnt==S):
      print(graph[X-1][Y-1])
      break
sol(S,X,Y) # O(K N N) => 10^3 * 4 * 10^4 : 4 * 10^7


# O(NN+NNN) : O(NNN), N=200, 8*10^6