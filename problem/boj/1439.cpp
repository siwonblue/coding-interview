#include <iostream>
#include <string>
using namespace std;

int zero=0, one=0;
string str;

void solution(){
  cin >> str;
  for(int i=0;i<str.size();i++){ // 범위 
    if(str[i]!=str[i+1]){
      if(str[i]=='0') zero+=1;
      else one+=1;
    }
  }
  cout << min(zero,one);
}

int main(void){
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);
  freopen("input.txt","r",stdin);
  solution(); 
}