import sys
input = sys.stdin.readline
n = int(input())
src = list(map(int, input().split()))
dp = [0] * n
dp[0] = src[0]
for i in range(1,n):
  dp[i] = max(dp[i-1], dp[i-2]+src[i])
print(dp)