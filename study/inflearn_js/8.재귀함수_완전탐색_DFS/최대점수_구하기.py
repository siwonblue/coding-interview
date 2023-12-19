import sys
input = sys.stdin.readline
N, M = map(int, input().split())
s = []
t = []
for _ in range(N):
  score, time = map(int, input().split())
  s.append(score)
  t.append(time)
ans = 0
def DFS(level, score, time):
  global ans
  if time>M: return
  if level==N:
    ans = max(ans, score)
    return    
  DFS(level+1, score, time )
  DFS(level+1, score+s[level], time+t[level])
DFS(0,0,0)
print(ans)