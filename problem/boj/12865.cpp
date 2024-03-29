#include <iostream>
using namespace std;

int N,K;
int V[101]={0,};
int W[101]={0,};
int dp[101][100001] ={0,};

void input(){
  cin >> N >> K;
  for(int i=1;i<=N;i++) cin >> W[i] >> V[i]; 
}

int main(void){
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);
  freopen("input.txt","r",stdin);
  input();

  // operation
  for(int i=1;i<=N;i++){
    for(int j=1; j<=K;j++){
      if(j>=W[i])dp[i][j] = max(dp[i-1][j-W[i]]+V[i] , dp[i-1][j]);
      else dp[i][j] = dp[i-1][j];
    }
  } 
  
  cout << dp[N][K];
}