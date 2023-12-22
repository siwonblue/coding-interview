# 자연수 N이 주어지면 1로 만들 때까지 최소 연산을 구하라.
# 연산 종류는 다음과 같다.
# 1을 뺀다.
# 2로 나눈다.
# 3으로 나눈다.
# 5로 나눈다.


import sys
input = sys.stdin.readline

target = int(input())
dp = [0] * (target+1)
for num in range(2,target+1):
  dp[num] = dp[num-1] + 1
  if num%2==0:
    dp[num] = min(dp[num], dp[num//2]+1)
  if num%3==0:
    dp[num] = min(dp[num], dp[num//3]+1)
  if num%5==0:
    dp[num] = min(dp[num], dp[num//5]+1)

# 정답
print(dp)