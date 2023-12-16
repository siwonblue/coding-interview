#include <iostream>
using namespace std;
int n;
void DFS(int n){
  if(n<=0) return;
  DFS(n/2);
  cout << n%2;
}
int main(void){
  cin >> n;
  DFS(n);
}