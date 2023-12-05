#include <iostream>
#include <stack>
using namespace std;

int N;
string str;

void operation(stack<char> &stk, bool &flag){
  for(int j=0;j<str.size();j++){
      // 1. 비어있으면 그냥 넣기
      if(stk.empty() && (str[j]=='(' || str[j]==')') ){
        if(str[j]==')'){
          cout << "NO" << "\n";
          flag = true;
          break;
        }
        stk.push(str[j]);
        continue;
      }

      // 2. 비어있지 않으면 비교
      if(stk.top()!='(' && str[j]==')'){  
        cout << "NO" << "\n";
        flag = true;
        break;
      }
      if(stk.top()=='(' && str[j]==')'){
        stk.pop();
        continue;
      }
      stk.push(str[j]);
    }
   
}

void solution(){
  cin >> N;
  for(int i=0;i<N;i++){
    cin >> str;
    bool isBreak = false;
    stack<char> stk;
    operation(stk,isBreak);
    if(!isBreak){
      if(stk.empty()) cout << "YES" << "\n";
      else cout << "NO"<<"\n";
    }
  }
}

int main(void){
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);
  freopen("input.txt","r",stdin);
  solution();
}