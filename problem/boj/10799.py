src = input()

stack = []
cnt = 0

for i in range(len(src)):
  if src[i]=="(":
    stack.append("(")
  else :
    if src[i-1] == "(":
      stack.pop()
      cnt+=len(stack)
    else:
      cnt+=1
      stack.pop()
print(cnt)
