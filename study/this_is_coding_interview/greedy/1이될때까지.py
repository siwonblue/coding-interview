N,K = map(int, input().split())
ans = 0
while True:
  if N==1:break
  
  if N%K==0:
    N //=K
    ans+=1
  else:
    temp = N%K
    N -= temp
    ans += temp
print(ans)  