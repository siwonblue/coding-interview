#include <iostream>
using namespace std;

int N;

void operation(int i,int j, int n){
  if(i/n%3==1 && j/n%3==1) cout << " ";
  else if(n/3==0) cout << "*";
  else operation(i,j,n/3);
}

void solution(){
  cin >> N;
  for(int i=0;i<N;i++){
    for(int j=0;j<N;j++) operation(i,j,N);
    cout << "\n";  
  }
}

int main(void){
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);
  freopen("input.txt","r", stdin);
  solution();
}