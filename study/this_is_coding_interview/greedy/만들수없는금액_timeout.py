import sys
input = sys.stdin.readline
N = int(input())
src = list(map(int, input().split()))
subset = [0] * len(src)
dp = [False] * (sum(src)+1)

def getSubset(l):
  if(l==len(src)):
    dp[sum(subset)] = True
    return
  
  subset[l] = src[l]
  getSubset(l+1)
  subset[l] = 0
  getSubset(l+1)

getSubset(0)
for idx, flag in enumerate(dp):
  if not flag:
    print(idx)
    break
  
