arr = [1, 1, 2, 2, 2, 2, 3]
target = 2

def find_left_idx(arr,target):
  start = 0
  end = len(arr) - 1
  while start<=end:
    mid = (start+end)//2

    if arr[mid] == target:
      if mid==0 or arr[mid-1] > target:
        return mid
    if arr[mid] < target:
      start = mid + 1
    else:
      end = mid - 1
  return -1


def find_right_idx(arr,target):
  start = 0
  end = len(arr) - 1
  while start<=end:
    mid = (start+end)//2
    if arr[mid] == target:
      if mid==len(arr)-1 or arr[mid+1] > target:
        return mid
    if arr[mid]<target:
      start = mid + 1
    else:
      end = mid - 1
  return -1

def solution(arr,target):
  return find_right_idx(arr,target) - find_left_idx(arr,target) + 1
print(solution(arr,target))