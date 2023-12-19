import sys
input = sys.stdin.readline
a,b = map(int, input().split())
def sol():
  if a>b:
    print(">")
  elif a<b:
    print("<")
  elif a==b:
    print("==")
sol()