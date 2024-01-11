import sys
input = sys.stdin.readline
N,M = map(int, input().strip().split())
src = list(map(int, input().strip().split()))

ans = 0
start = 0
end = max(src)

while start<=end:
  mid = (start+end)//2
  cnt = 0
  
  # parametric search
  for s in src:
    if mid < s: 
      cnt += s - mid  
  
  if cnt>=M: 
    ans = mid
    start = mid + 1
  else: end = mid - 1
      
print(ans)