#include <iostream>
using namespace std;
int N;
int main(void){
  cin >> N;
  int stair[46]; 
  stair[1] = 1;
  stair[2] = 2;
  for(int i=3;i<=N;i++) stair[i] = stair[i-1] + stair[i-2];
  cout << stair[N];
  return 0;
}