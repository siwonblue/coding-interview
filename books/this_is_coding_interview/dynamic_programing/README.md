# 개미전사

- 접근방식
  1. memoization 을 위해 정의하는 dp에는 n 만큼의 길이일 때 최적의 값을 저장함
     ex. dp[3] 은 3칸 길이일 때 최적의 값
  2. bottom up approach  
     직전 값을 선택했는지 안했는지에 따라 분기해서 생각하면 됨
  3. ai = max(a(i-1), a(i-2)+arr[i-1])
