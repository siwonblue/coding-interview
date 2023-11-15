# 성적평균

https://softeer.ai/app/assessment/index.html?xid=51283&xsrfToken=UsRxl2lfSNiHZxmvITtVwbreq87pN34U&testType=practice

- 부동소수점 다르는 방식
  ```c++
  #include <iomanip>
  ...
  cout << std::fixed << std::setprecision(2) << 45;
  ```
- n번째 자리까지 반올림하는 방법
  ```c++
  #include <cmath>
  int num = 45.312;
  int decimal = 1e2;
  num = std::round(num * decimal) / decimal;
  ```
