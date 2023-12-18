a,b = map(int,input().split())
l = []
for i in range(1,50):
    for j in range(i):
        l.append(i)
s = 0
for i in range(a-1,b):
    s+=l[i]
print(s)