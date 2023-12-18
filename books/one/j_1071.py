import sys
input = sys.stdin.readline
len,t = list(map(int, input().split()))
data = list(map(int, input().split()))

def sol():
  ans = 0
  for num in data:
    if num == t:
        ans=+1
  print(ans)
sol()