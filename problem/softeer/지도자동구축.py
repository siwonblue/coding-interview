# 이 문제는 
# 처음에 재귀형태의 문제라고 착각했는데 규칙을 점화식으로 찾을 수 있음.
# 점화식을 다루기 위해 dp bottom up 방식으로 답을 찾음.

N = int(input())
dp = [0] * (N+1)
dp[0] = 4
dp[1] = 3
for i in range(2,N+1):
  dp[i] = dp[i-1] + pow(2, i-1)
print(dp[N]**2)