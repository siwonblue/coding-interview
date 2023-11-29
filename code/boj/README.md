# 1916

https://www.acmicpc.net/problem/1916

- 다익스트라 기본 문제,
  시간초과가 난다. ab3a9f9 (HEAD -> main) [feat] 1916 fail : time out  
  [시간초과 이유 질문게시판](https://www.acmicpc.net/board/view/120158)

- WIP

# 14502

https://www.acmicpc.net/problem/14502

1. 3<= N,M <= 8 이기때문에 64C3 으로 벽을 세운다.
2. 벽이 세워지고 나면 DFS를 돌린다.
3. 영역의 수를 계산한다.

# 24479

https://www.acmicpc.net/problem/24479
DFS 기본

# 1753

https://www.acmicpc.net/problem/1753
최단거리, 최단경로, 다익스트라 기본 예제

- 맵을 전체 다 받으면 메모리 초과가 난다.

  ```js
  // bad
  const graph = Array.from({ length: V }, () => Array(V).fill(0));
  ```

  ```js
  // 인접 행렬로 받기 위해 수정
  const graph = Array.from({ length: V }, () => []);
  ```

  ```bash
  c63f351 (HEAD -> main) [feat] 1753.js fail : exceed memory
  $git show c63f351
  ```

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

# 11403

https://www.acmicpc.net/problem/11403
최단경로, DFS, 다익스트라

- graph 를 입력받는다.
- i, j 모든 경우에 대해 DFS를 수행한다.
- i에서 출발해서 방문할 수 있는 모든 곳을 캐치한다.
- 방문한 곳이면 1을 출력한다.
