N = int(input())
people = []
for i in range(N):
  data = input().split()
  people.append((data[0], int(data[1])))
people.sort(key=lambda person: person[1])

for person in people:
  print(person[0], end=' ')
  