# 배열로 정보를 저장하겠다고 생각 해야함.
# 0,1 이 변환되는 배열에 대해 인덱스값을 저장하는 방식



n, m = map(int,input().split()) 
rooms = {}

for _ in range(n):
    room = input() 
    rooms[room] = [0] * 9 + [1] * 10   
    
for i in range(m):
    r, s, t = input().split() 
    s = int(s)
    t = int(t)
    for i in range(s,t):
        rooms[r][i] = 0


# 회의실 이름 오름차순으로 회의실 정보 출력
rooms = dict(sorted(rooms.items()))

for idx, room in enumerate(rooms):
    print(f"Room {room}:")
    table = rooms[room]
    times = []
    start, end = 0,0
    current = 0

    for time in range(9,19):
        if current==0 and table[time]==1:
            start = time
            current = 1
        elif current==1 and table[time]==0:
            end = time
            current = 0
            times.append([start,end])
        if time == 18 and table[time]==1 and time!=start:
            times.append([start,time])

    if len(times)==0:
        print('Not available')
    else:
        print(f"{len(times)} available:")
        for t in times:
            print(f"{t[0]:02d}-{t[1]}")
    if idx!=len(rooms)-1:
        print('-----')    
    

