input = list(input())

temp = []
cnt = 0
for i in input:
  if i.isdigit(): cnt+=int(i)
  else: temp.append(i)
temp.sort()
print(f"{''.join(temp)}{cnt}")

