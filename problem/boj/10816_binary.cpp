#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int N,M,num;
vector<int> src;

void input(){
  cin >> N;
  src.resize(N);
  for(int i=0;i<N;i++){
    cin >> num;
    src[i] = num;
  } 
  sort(src.begin(),src.end());
  cin >> M;
  for(int i=0;i<M;i++){
    cin >> num;
    cout << upper_bound(src.begin(), src.end(), num)- lower_bound(src.begin(), src.end(), num)  << " ";
  }
  
}

void solution(){
  input();
}

int main(void){
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);
  freopen("input.txt","r", stdin);
  solution();
}