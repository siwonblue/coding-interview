#include <iostream>
using namespace std;

void DFS(int n){
  if(n<=0) return;
  cout << n <<"\n";
  DFS(n-1);
}

int main(void){
  DFS(3);
}