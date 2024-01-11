import sys
input = sys.stdin.readline
src = []
target = []

N = int(input().strip())
src = sorted(list(map(int, input().strip().split())))

M = int(input().strip())
target = list(map(int, input().strip().split()))

def binary(target):
  global src
  start = 0
  end = len(src)-1
  mid = -1
  while start<=end:
    mid = (start+end)//2
    
    if src[mid]==target:
      return "yes"
    if src[mid] > target:
      end = mid-1
    else:
      start = mid+1
  return "no"

for i in range(len(target)):
  print(binary(target[i]))
