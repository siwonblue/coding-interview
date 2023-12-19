import sys
input = sys.stdin.readline
n = int(input())
src = list(map(int, input().split()))
i,j,k = map(int, input().split())

def sol():
  ans = 0
  for idx,s in enumerate(src):
    if idx>=i and idx<=j:
        ans+= s*k
    else : ans+=s 
  print(ans)
sol()