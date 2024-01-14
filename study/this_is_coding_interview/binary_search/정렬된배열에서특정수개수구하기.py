import sys
input = sys.stdin.readline
# N,M = map(int, input().split())
# arr = list(map(int, input().split()))

N = 7
M = 2
arr = [1,1,2,2,2,2,3]

def lower_bound(arr):
  start = 0
  end = len(arr)-1
  while start<=end:
    mid = (start+end)//2
    if arr[mid]<M: start = mid + 1
    else: end = mid-1
  return start

def upper_bound(arr):
  start = 0
  end = len(arr)-1
  while start<=end:
    mid = (start+end)//2
    if arr[mid]<=M: start = mid + 1
    else: end = mid-1   
  return start

print(upper_bound(arr)-lower_bound(arr))