import sys
input = sys.stdin.readline
A = list(map(int, input().split()))
B = list(map(int, input().split()))

def sol():
  a = 0
  b = 0
  ans = 0
  for i in range(0,len(A)):
    if A[i]>B[i]: a+=1
    elif A[i]<B[i] : b+=1
  ans = 1 if a>b else 0
  print(ans)
sol()
