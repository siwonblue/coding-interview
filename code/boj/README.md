# 11659

https://www.acmicpc.net/problem/11659

- N, M 이 모두 10^5 이기때문에 단순히 반복문을 두번 돌리면 O(N^2) 로 시간초과가 발생한다.
- 누적합을 미리 구하고 필요한 만큼 이전 값을 빼는 방식으로 답을 찾을 수 있다.

# 1260

https://www.acmicpc.net/problem/1260

- 2차원 배열을 정점을 이용해서 표현한다.
- 한칸씩 이동할 때 마다 원하는 최단거리인지 확인해야하기 때문에 BFS 가 적절하다고 판단했다.
- node 로는 풀리지 않는 문제로 알고 있음.

# 2559

https://www.acmicpc.net/problem/2559

- 누적합을 구한다.
- 문제 조건에 맞게 구현한다.

# 2805

https://www.acmicpc.net/problem/2805

- 탐색을 해야하는데 찾아야하는 M의 범위가 20억이기 때문에 이진탐색을 의심한다.
- M의 범위에서 이진 탐색을 수행하고 찾아진 값이 주어진 조건을 만족하는지 확인하는 파라메트릭 서치 유형이다.

# 2839

https://www.acmicpc.net/problem/2839

- 트리구조로 생각해서 BFS 로 풀었다.

# 9095

https://www.acmicpc.net/problem/9095

- 점화식 구함.
- a[n] = a[n-1] + a[n-2] +a[n-3]

# 1464

https://www.acmicpc.net/problem/1463

- 트리구조로 생각해서 BFS 로 풀었음.
- memoization 을 해줘야 해서 dp 문제로 분류

# 2512

https://www.acmicpc.net/problem/2512

- 파라메트릭 서치 이분탐색
- 예산합 더하는데 O(N)
- N 이상 1억 이하의 M 값 찾는데 O(N)
- 시간 O(N^2) 인데 값이 크기때문에 시간 초과
- 이분탐색으로 풀어야 함.
