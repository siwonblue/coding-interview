import sys
input = sys.stdin.readline
C,N = map(int, input().split())
W = []
for _ in range(N):
  W.append(int(input()))
ans = 0
def DFS(level,sum):
  global ans
  if sum>C:return
  if level == len(W):
    ans = max(ans, sum)
    return
  DFS(level+1, sum) 
  DFS(level+1, sum+W[level])
DFS(0,0)
print(ans)