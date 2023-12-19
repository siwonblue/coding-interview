

arr = [-15,-6, -1, 0, 1, 2,3, 7]

def binary_search(arr):
  start = 0
  end = len(arr) - 1
  while start<=end:
    mid = (start+end)//2
    if arr[mid] == mid:
      return mid
    if arr[mid] < mid:
      start = mid + 1
    else:
      end = mid - 1
  return -1
