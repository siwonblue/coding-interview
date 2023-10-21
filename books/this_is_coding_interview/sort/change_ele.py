
N,K = map(int,input().split())

A = list(map(int,input().split()))
B = list(map(int,input().split()))

A.sort()
B.sort(reverse=True)
print(A,B)
ans = 0
for i in range(len(A)):
  if i<K:
    ans += B[i]
  else:
    ans += A[i]

print(ans)