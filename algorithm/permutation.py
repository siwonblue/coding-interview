from itertools import permutations

src = [1,2,3]
N= 2
for permutation in permutations(src,N):
  print(permutation)