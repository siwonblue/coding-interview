# 부분합 찾기
# 윈도우 사이즈가 정해진 경우
def sliding_window_sum(arr, window_size):
    if len(arr) < window_size:
        return []

    window_sum = sum(arr[:window_size])
    result = [window_sum]

    for i in range(window_size, len(arr)):
        window_sum += arr[i] - arr[i - window_size]
        result.append(window_sum)

    return result

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
window_size = 3

result = sliding_window_sum(arr, window_size)
print(result)  # [6, 9, 12, 15, 18, 21, 24]
