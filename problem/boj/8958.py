n = int(input())

for _ in range(n):
  src = input().split('X')
  ans = 0
  for s in src:
    if s=='': continue
    ans += (len(s)*(len(s)+1))//2
  print(ans)