import sys
src = list(map(int, input().split()))
a_cnt=0
d_cnt=0
for i in range(len(src)-1):
    temp = src[i] - src[i+1]
    if temp==-1: a_cnt+=1
    elif temp==1: d_cnt+=1

if a_cnt==7: print('ascending')
elif d_cnt==7: print('descending')
else: print('mixed')
    