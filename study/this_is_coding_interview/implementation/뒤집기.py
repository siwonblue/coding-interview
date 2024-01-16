import sys
input = sys.stdin.readline
string = input().rstrip()

def sol(string):
  if len(list(set(string)))==1:
    return print(0)
  
  hash = {}
  hash['0'] = 0
  hash['1'] = 0
  pivot = string[0]
  for i in range(1,len(string)):
    if string[i]!=pivot:
      hash[pivot]+=1
      pivot = string[i]
  hash[pivot]+=1
  
  print(min(hash['0'], hash['1']))

sol(string)


# 더 나은 풀이
# s = input()
# count = 0
# for i in range(1, len(s)):
#     if s[i - 1] != s[i]:
#         count += 1

# print((count + 1) // 2)