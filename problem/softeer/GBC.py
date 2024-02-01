# 해시자료구조까지 가지 않아도
# 1차원 배열만으로 해결할 수 있다.

import sys
limit_info = [0] * 101
n,m = map(int, input().split())

now = 1
for _ in range(n):
  end, limit = map(int, input().split())
  for i in range(now, now+end):
    limit_info[i] = limit
  now += end


# 탐색
now = 1
ans = 0
for _ in range(m):
  end, speed = map(int, input().split())
  for i in range(now, now+end):
    is_violate = speed - limit_info[i]
    if is_violate>0 : ans = max(ans, is_violate)
  now +=end
print(ans)