data = list(map(int,list(input())))
half_len = len(data)//2

if sum(data[0:half_len]) == sum(data[half_len:]): print("LUCKY")
else: print("READY")