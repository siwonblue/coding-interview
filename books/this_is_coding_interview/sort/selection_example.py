
arr = [8,7,6,5,4,3,2,1,10,3]

for i in range(len(arr)):
  min_idx = i
  for j in range(i,len(arr)):
    if arr[j] <= arr[min_idx]:
      min_idx = j
  arr[min_idx], arr[i] = arr[i], arr[min_idx]
print(arr)