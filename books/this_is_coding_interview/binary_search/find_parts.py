n = int(input())
sources = list(map(int, input().split()))
m = int(input())
targets = list(map(int, input().split()))

def binary_search(target):
  ans = 'NO'
  start = 0
  end = len(sources) - 1
  mid = (start+end)//2
  while start<=end:
    if sources[mid] == target:
      return 'YES'
    if sources[mid] < target:
      start = mid + 1
    elif sources[mid] > target:
      end = mid - 1
  return ans

def solution():
  for target in targets:
    result = binary_search(target)
    if result == 'YES':
      print(result)
    else:
      print(result)

solution()