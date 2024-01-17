import sys
input = sys.stdin.readline

N = int(input())
dp = [[0] * (i) for i in range(1,N+1) ]
graph = []
for _ in range(N):
  graph.append(list(map(int, input().split())))

dp[0] = graph[0]

for i in range(1,N):
  length = len(dp[i])
  for j in range(length):
    if j==0:
      dp[i][j] = graph[i][j] + dp[i-1][j]
    elif j==length-1:
      dp[i][j] = graph[i][j] + dp[i-1][j-1]
    else:
      dp[i][j] = graph[i][j] + max(dp[i-1][j-1], dp[i-1][j])
print(max(dp[N-1]))