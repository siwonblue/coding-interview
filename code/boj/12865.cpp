#include <iostream>
using namespace std;

int N,K;
int V[101]= {0,};
int W[101]= {0,};
int dp[101][100001] = {0,};

void input(){
  cin >> N >> K;
  for(int i=1;i<=N;i++){
    cin >> W[i] >> V[i];
  }
}

int main(void){
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);
  freopen("input.txt","r",stdin);
  input();
  

}