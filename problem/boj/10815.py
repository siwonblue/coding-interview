# 숫자카드, 숫자 카드

n = int(input())
src = sorted(list(map(int,input().split())))
m = int(input())
target =list(map(int,input().split()))


# 이진탐색으로 구현
def search(target):
  start = 0
  end = len(src)-1
  while start<=end:
    mid = (start+end)//2
    if src[mid]==target:
      return print('1')
    if src[mid]<target: start = mid+1
    else: end = mid-1
  print('0')


for t in target:
  search(t)


# 해시테이블 이용
hash = {}
for s in src:
  hash[s] = 1

for t in target:
  if t in hash: print('1')
  else: print('0')
    
  