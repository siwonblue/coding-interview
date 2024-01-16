import sys
input = sys.stdin.readline
data = input()
ans = 0
for s in data:
  if int(s)<=1: ans+=int(s)
  else: ans *= int(s)
print(ans)