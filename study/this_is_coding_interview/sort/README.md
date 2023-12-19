# 선택정렬

- 하나를 선택하고 선택한 것들 뒤에 있는 것중 가장 작은 것을 찾는다.
- 가장 작은 것과 이전에 선택한 것을 교체한다.
- O(N^2)

# 삽입정렬

- 하나를 선택하고 그 앞쪽에 있는 값들을 확인한다.
- O(N^2)

# 시간 복잡도

Python, JS 모두 내장함수를 사용하면 nlogn 의 시간복잡도가 소요되니, 더 큰 자료가 들어온다면 계수 정렬을 사용해야 한다.
| Language/Method | Best Time Complexity | Average Time Complexity | Worst Time Complexity |
| ----------------------------------- | -------------------- | ----------------------- | --------------------- |
| Python `sort` (list method) | O(n log n) | O(n log n) | O(n log n) |
| Python `sorted` (built-in function) | O(n log n) | O(n log n) | O(n log n) |
| JavaScript `sort` (Array method) | O(n log n)\* | O(n log n)\* | O(n^2)\* |

\* Note: JavaScript's built-in `sort` method time complexity varies between browsers and their versions. The complexities mentioned are based on the V8 engine (used in Chrome and Node.js). Some older browsers might have a worst-case time complexity of O(n^2) for their sorting algorithm.

# 내장 함수를 사용하지 못하는 경우

내장함수는 nlogn 의 시간복잡도를 가지기 때문에 이를 사용할 수 없는 경우는 계수정렬 또는 퀵정렬을 사용해야 한다.
