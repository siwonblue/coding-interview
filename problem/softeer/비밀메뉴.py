import sys

m,n,k = input().split()
secret = ''.join(list(input().split()))
input = ''.join(list(input().split()))

if secret in input: print('secret')
else: print('normal')
