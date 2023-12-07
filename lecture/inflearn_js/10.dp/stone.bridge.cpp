#include <iostream>
using namespace std;
int N;
int main(void){
  cin >> N;
  int stones[47];
  stones[1] = 1;
  stones[2] = 2;
  for(int i=3;i<=N+1;i++) stones[i] = stones[i-1]+stones[i-2];
  cout << stones[N+1];
  return 0;
}