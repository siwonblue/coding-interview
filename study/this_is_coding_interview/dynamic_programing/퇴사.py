import sys
input = sys.stdin.readline
N = int(input())
dp = [0] * (N+1)
src = [list(map(int, input().split())) for i in range(N)]

for i in range(N):
  print(src[i], i, src[i][0])
  for j in range(i+src[i][0], N+1):
    if dp[j] < dp[i] + src[i][1]:
      dp[j] = dp[i] + src[i][1]
  print(dp,'\n')