N,M,K = map(int, input().split())
src = sorted(list(map(int, input().split())), reverse=True)
first = src[0]
second = src[1]
sum = first * K + second

ans = (sum * (M//(K+1))) + (first * (M%(K+1)) )

