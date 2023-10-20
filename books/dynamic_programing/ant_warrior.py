import sys
N = int(sys.stdin.readline())
storages = list(map(int, sys.stdin.readline().split()))

dp = [0] * (N+1)
dp[1] = storages[0]
for i in range(2, N+1):
  dp[i] = max(dp[i-1], dp[i-2]+storages[i-1])
print(dp)