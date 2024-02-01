
# 냅색 알고리즘
# 쪼갤 수 있기 때문에 그리디로 처리

w,n = map(int, input().split())
# src = []
# for _ in range(n):
#     src.append(list(map(int, input().split())))
src = [list(map(int, input().split())) for _ in range(n)]
src = sorted(src, key=lambda x: x[1], reverse=True)

value = 0
for m,p in src:
    if w-m>=0:
        w-=m
        value += m * p
    else:
        value += w * p
        break
print(value)
