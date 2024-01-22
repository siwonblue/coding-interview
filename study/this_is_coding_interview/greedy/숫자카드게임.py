N,M = map(int, input().split())
ans = 0
for _ in range(N):
  ans = max(min(list(map(int, input().split()))), ans)
print(ans)
