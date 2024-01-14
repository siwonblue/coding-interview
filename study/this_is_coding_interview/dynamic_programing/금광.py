import sys, copy
input = sys.stdin.readline

T = int(input())

while T:
  N,M = map(int, input().split())
  dp = [ [0] * (N) for _ in range(M+1) ]
  graph = [[]]
  raw = list(map(int, input().split()))
  for i in range(0,len(raw),N): 
    graph.append(raw[i:i+N])
  print(graph)
  dp[1] = copy.deepcopy(graph[1])
  for i in range(2,M+1):
    for j in range(M):
      if j==0:
        dp[i][j] = graph[i][j] + max(dp[i-1][j], dp[i-1][j+1])
      elif j==M-1:
        dp[i][j] = graph[i][j] + max(dp[i-1][j-1], dp[i-1][j])
      else:
        dp[i][j] = graph[i][j] + max(dp[i-1][j-1], dp[i-1][j], dp[i-1][j+1])

  print(max(dp[M]))
  T-=1