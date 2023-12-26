# a보다 큰 소수 중에 가장 작은 소수로 이동하는 최소 횟수
# 연산의 종류는 다음과 같다.
# 1을 더한다.
# 2를 곱한다.
import math

def is_prime(n):
  if n<2 : return False
  for i in range(2, math.floor(math.sqrt(n)+1)):
    if n%i==0:
      return False
  return True

# a보다 큰 소수 중에서 최소 소수로 가는 최소 횟수를 구하는 함수
def sol(a):
  min_prime = a+1
  while True:
    if is_prime(min_prime) : break
    else: min_prime+=1
  print(min_prime)
  dp = [0] * (min_prime + 1)
  
  for i in range(a+1,len(dp)):
    dp[i] = dp[i-1]+1
    if i%2==0 and i//2>=a:
      dp[i] = min(dp[i], dp[i//2]+1)
  print(dp)
sol(7)
