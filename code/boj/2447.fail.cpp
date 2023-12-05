#include <iostream>
#include <vector>
using namespace std;

int N;

void operation(int n, string prev){
  string now;
  string empty_s;
  
  for(int i=0;i<n/3;i++){
    for(int j=0;j<n/3;j++) empty_s += " ";
    empty_s += "\n";
  }
  empty_s.erase(empty_s.size()-1);

  for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){
      now += (i==1 && j==1) ? empty_s : prev;
    }
    now+="\n";
  }
  // now.erase(now.size()-1);
  
  if(n==N) cout << now;
  else operation(n*3, now);
}

void solution(){
  cin >> N;
  operation(3,"*");
}

int main(void){
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);
  freopen("input.txt","r", stdin);
  solution();
}