[col,row] = list(input())
col = ord(col)-96
row = int(row)

dx = [-2,-2,-1,1,2,2,1,-1]
dy = [-1,1,2,2,1,-1,-2,-2]
cnt = 0

for i in range(8):
  nx = row + dx[i]
  ny = col + dy[i]
  if nx<1 or ny<1 or nx>8 or ny>8: continue
  cnt+=1
print(cnt)


