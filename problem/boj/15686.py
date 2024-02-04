# 치킨 배달, 치킨배달
from itertools import combinations
import sys
n,m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

def get_dis(r,c, chic):
  cnt = sys.maxsize
  for ch in chic:
    chic_r, chic_c = ch
    cnt = min(cnt, abs(r-chic_r)+abs(c-chic_c))
  return cnt

def sol():
  global n,m
  ans = sys.maxsize
  # 치킨집 위치 파악
  chickens = []
  for r in range(n):
    for c in range(n):
      if graph[r][c]==2: chickens.append((r,c))

  # 완전탐색 조합 구하기
  for c in combinations(chickens,m):
    chic = list(c)
    sum = 0
    for r in range(n):
      for c in range(n):
        if graph[r][c]==1:
          sum+=get_dis(r,c,chic)
    ans = min(sum,ans)
  return ans
      
print(sol())
