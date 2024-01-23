def solution(numbers, target):
    answer = 0
    
    def dfs(l, sum):
      nonlocal answer
      if l==len(numbers):
        if sum==target: answer+=1
        return

      dfs(l+1, sum+numbers[l])
      dfs(l+1, sum-numbers[l])

    dfs(0,0)

    return answer

solution([1,1,1],3)