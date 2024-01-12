import sys
input = sys.stdin.readline
data = sorted(list(map(int, input().strip().split())), reverse=True)

idx = 0
ans = 0

while True:
  if idx>=len(data): break
  x = data[idx]
  if len(data[idx:idx+x]) > x: break
  else: ans+=1
  idx+=x
print(ans)

# 답지는 오름차순으로 정리하는데
# 나는 내림차순으로 풀었음.
# 반례는 못 찾겠다.