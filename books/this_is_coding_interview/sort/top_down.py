N = int(input())
arr = []
for i in range(N):
  arr.append(int(input()))
arr = sorted(arr, reverse=True)

for num in arr:
  print(num, end=" ")
