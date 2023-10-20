# 개미전사

- 접근방식
  1. memoization 을 위해 정의하는 dp에는 n 만큼의 길이일 때 최적의 값을 저장함
     ex. dp[3] 은 3칸 길이일 때 최적의 값
  2. bottom up approach  
     직전 값을 선택했는지 안했는지에 따라 분기해서 생각하면 됨
  3. ai = max(a(i-1), a(i-2)+arr[i-1])

# 바닥공사 floor construction

- 접근방식
  1.  dp 라고 생각하면 bottom up 을 생각
  2.  dp memoization 어떻게 할지 고민
  3.  dp[1] = 1, dp[2] = 2 인 점에서 출발하면 타일 칸이 늘어날 때 마지막에 한칸을 비우는 것과 두칸을 비우는 경우로 나뉨
  4.  점화식 : dp[i] = dp[i-1] + dp[i-2] \* 2 (단, i>=3)
