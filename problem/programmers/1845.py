def solution(nums):
    answer = 0
    target = len(nums)//2
    set_target = len(list(set(nums)))
    answer = set_target if target>=set_target else target    
    return answer
print(solution([1,1,1,2,2,2,3,3,4,4]))