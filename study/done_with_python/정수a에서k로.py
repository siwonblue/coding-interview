# k에서 a까지 가는 최소 회수
# 연산의 종류는 다음과 같다.
# 1을 뺀다.
# 2로 나눈다.
# 1까지 가는 게 아니라 a까지 가는 거라서 하나의 조건이 더 들어간다.

a,k = list(map(int, input().split()))

dp = [0] * (k+1)

for i in range(a+1,k+1):
  dp[i] = dp[i-1] + 1
  if i%2==0 and (i//2)>=a: 
    dp[i] = min(dp[i//2]+1, dp[i])
print(dp[k])