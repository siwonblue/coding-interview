#include <iostream>
using namespace std;

int N,M;
int S[21] = {0,};
int T[21] = {0,};
int dp[301] = {0};

void input(){
  cin >> N >>M;
  for(int i=1;i<=N;i++)
    cin >> S[i] >> T[i];
}

int main(void){
  
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);
  freopen("input.txt","r",stdin);
  input();
  
  //operation
  for(int i=1;i<=N;i++){
    for(int j=M;j>=T[i];j--){
      dp[j] = max(dp[j-T[i]]+S[i], dp[j]);
    }
  }
  cout << dp[M];
}