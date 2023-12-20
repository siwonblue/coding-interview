n,m  = map(int, input().split())

num = list(range(1,n+1))
ans = [0] * m

def DFS(l):
  global ans
  if l == m:
    print(ans)
    return
  for i in range(n):
    ans[l] = num[i]
    DFS(l+1)
DFS(0)