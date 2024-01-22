arr = [1,2,3,4,5]
target = 3
def binary():
	start = 0
	end = len(arr)-1
	while start<=end:
		mid = (start+end)//2
		if arr[mid]==target: return mid
		if arr[mid] < target: start = mid + 1
		else: end = mid - 1
print(binary())