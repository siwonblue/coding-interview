import sys
input = sys.stdin.readline
N = int(input())
coins = sorted(list(map(int, input().split())))

target = 1

for coin in coins:
  if coin > target:
    break
  target += coin
print(target)
