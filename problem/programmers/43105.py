import copy

# 정수 삼각형
def solution(triangle):
    
    dp = copy.deepcopy(triangle)
    
    for row_index in range(1,len(dp)):
        for col_index in range(len(dp[row_index])):
            if col_index==0:
                dp[row_index][col_index] = dp[row_index-1][col_index] + triangle[row_index][col_index]
            elif col_index == len(dp[row_index])-1:
                dp[row_index][col_index] = dp[row_index-1][col_index-1] + triangle[row_index][col_index]
            else:
                dp[row_index][col_index] = triangle[row_index][col_index] + max(dp[row_index-1][col_index-1], dp[row_index-1][col_index])
    return max(dp[len(dp)-1])

print(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]))