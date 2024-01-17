import sys
input = sys.stdin.readline
N,C = map(int, input().split())
arr = []

for i in range(N):
  arr.append(int(input().rstrip()))
arr = sorted(arr)
ans = 0
print(arr)

def search():
  global ans
  start = arr[1] - arr[0]
  end = arr[-1] - arr[1]
  while(start<=end):
    mid = (start+end)//2
    value = arr[0] # 첫번째 집에는 공유기 설치했다고 가정
    cnt = 1 # 첫번째는 공유기 설치했다고 가정했으니 초기값이 1
    for i in range(1,len(arr)):
      if arr[i] >= value + mid:
        value = arr[i]
        cnt+=1

    if cnt>=C:
      start = mid +1
      ans = mid      
    elif cnt < C:
      end = mid - 1

search()
print(ans)


    
    
    


