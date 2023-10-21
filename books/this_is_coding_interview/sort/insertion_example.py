
arr = [8,7,6,5,4,3,2,1,10,3]
for i in range(1,len(arr)):
  for j in range(i,0,-1):
    if arr[j-1] > arr[j]:
      arr[j],arr[j-1] = arr[j-1], arr[j]
    else:
      break
print(arr)

