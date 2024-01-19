def check(p):
  stack = []
  for s in p:
    if s=='(': stack.append(s)
    else:
      if len(stack)==0: return False
      stack.pop()
  return len(stack)==0
