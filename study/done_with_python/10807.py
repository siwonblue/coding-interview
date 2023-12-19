import sys
input = sys.stdin.readline
N = int(input())
src = list(map(int,input().split()))
v = int(input())

def sol():
  ans = 0
  for s in src:
    if(s==v):
      ans+=1
  print(ans)
sol()