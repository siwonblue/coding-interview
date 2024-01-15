import sys
input = sys.stdin.readline

N = int(input())
arr = list(map(int, input().split()))

start = 0
end = len(arr)-1
ans = -1
while(start<=end):
  mid = (start+end)//2
  if mid == arr[mid]:
    ans = mid
    break
  if mid > arr[mid]:
    start = mid + 1
  elif mid < arr[mid]:
    end = mid - 1
print(ans)