# 그룹 단어 체커, 그룹단어체커

# n = int(input())
# ans = 0
# for _ in range(n):

#   src = list(input())
#   save = [0] * (26)
#   cur = ''
#   is_group = True

#   for s in src:
#     idx = ord(s) - 97
#     if save[idx] == 0:
#       cur = s
#       save[idx]+=1
#     if save[idx]!=0 and cur!=s:
#       is_group = False
#       break
  
#   if is_group : ans+=1

# print(ans)



# 다른 풀이, 그룹단어가 아닐 경우를 바로 찾는다.
# n = int(input())

# def solve(n):
#     ans = 0
#     for _ in range(n):
#         data = list(input())
#         error = 0
#         for i in range(len(data)-1):
#             if data[i] != data[i+1]:
#                 temp = data[i+1:]
#                 if data[i] in temp:
#                     error +=1
#         if error == 0:
#             ans+=1
#     print(ans)
# solve(n)