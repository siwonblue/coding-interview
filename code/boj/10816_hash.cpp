#include <iostream>
#include <unordered_map>
using namespace std;

int N,M,num;
unordered_map<int,int> src;


void input(){
  cin >> N;
  for(int i=0;i<N;i++){
    cin >> num;
    src[num]++;
  }
  cin >> M;
  for(int i=0;i<M;i++){
    cin >> num;
    cout << src[num] << " ";
  }
}
void solution(){
  input();
}

int main(){
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);
  freopen("input.txt","r",stdin);
  solution();
}