import sys
input = sys.stdin.readline
a,b = map(int, input().split())
def sol():
  
  cnt = 1
  val = 1
  idx = 0
  ans = 0
  arr = []
  while True:
    if idx >= b:
      break
    if cnt==val:
      for _ in range(0,val):
        arr.append(val)
        idx+=1
      cnt = 1
      val+=1
    else:
      cnt+=1
  
  for idx,v in enumerate(arr):
    if idx>=a-1 and b-1>=idx:
      ans += v
  print(ans)
sol()