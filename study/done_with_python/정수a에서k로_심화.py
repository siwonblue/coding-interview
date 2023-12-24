# a에서 k로 가는 최소 회수
# 연산의 종류는 다음과 같다.
# 1을 더한다.
# 2를 곱한다.
# 이때 a에서 k로 가는 경로를 구하라.
# 예를들어, 3에서 7로 가는 최소값은
# 3 -> 6 -> 7이 경로이고 2가 최소값이다.

# 1. dp테이블 구한다.
a = 7
k = 77
dp = [0] * (k+1)
for i in range(a+1,len(dp)):
  dp[i] = dp[i-1] + 1
  if i%2==0 and i//2>=a:
    dp[i] = min(dp[i], dp[i//2]+1)

# 2. dp테이블을 이용해서 경로를 구한다.
def get_path(a,k,dp):
  path = []
  target = k
  while target != a:
    path.append(target)
    if target%2==0 and target //2 and dp[target//2]< dp[target-1] :
      target//=2
    else:
      target-=1
  path.append(a)
  path.reverse()
  return path
print(get_path(a,k,dp))
