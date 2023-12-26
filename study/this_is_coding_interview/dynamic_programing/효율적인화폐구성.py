# N가지 종류의 화폐가 있다.
# 화폐 개수를 최소한으로 해서 M을 만드는 화폐 개수를 찾아라.

# 해설
# 이 문제는 냅색 알고리즘 또는 DFS로 찾을 수 있다. N,M의 값이 너무 크다면 냅색 알고리즘으로 풀어야한다.

# DFS로 풀이하는 방법
N = 3
M = 4
coins = [3,5,7]
init = 10000
ans = init
def DFS(l,sum):
  global ans
  if sum > M or l > ans: return
  if sum==M:
    ans = min(ans, l)
    return
  for coin in coins:
    DFS(l+1, sum+coin)
DFS(0,0)
print('DFS 풀이:', -1 if ans==init else ans)

# 냅색 알고리즘으로 풀이하는 방법
dp = [init] * (M+1)
for coin in coins:
  if coin > M: continue  
  dp[coin] = 1
  for i in range(coin,len(dp)):
    dp[i] = min(dp[i], dp[i-coin]+1)
print('냅색풀이:',-1 if dp[M]==init else dp[M])
