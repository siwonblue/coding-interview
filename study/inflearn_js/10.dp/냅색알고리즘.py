# 냅색 알고리즘 기본 예제

import sys
input = sys.stdin.readline

N = int(input())
coins = list(map(int, input().split()))
target = int(input())
dp = [1000] * (target+1)
dp[0] = 0
for coin in coins:
  for i in range(coin,len(dp)):
    dp[i] = min(dp[i], dp[i-coin]+1)
print(dp[target])