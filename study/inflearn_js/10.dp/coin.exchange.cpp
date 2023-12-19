#include <iostream>
#include <vector>
using namespace std;
int N,M,coin;
vector<int> coins;
vector<int> dp;
int main(void){
  freopen("input.txt","r",stdin);
  cin >> N;
  coins.resize(N);
  for(int i=0;i<N;i++){
    cin >> coin;
    coins[i] = coin;
  }
  // for(int i=0;i<dp.size();i++) cout << dp[i] << " "; 
  cin >> M;
  dp.resize(M+1, 1000);
  dp[0] = 0;

  // knapsack 
  for(int i=0;i<coins.size();i++){
    // cout << "coin:" << coins[i] << ", dp: ";
    for(int j=coins[i];j<=M;j++)
      dp[j] = min(dp[j-coins[i]]+1, dp[j]);
    // for(int i=0;i<dp.size();i++) cout << dp[i] << " ";
    // cout << "\n";
  }
  cout << dp[M]; // 답 출력
}