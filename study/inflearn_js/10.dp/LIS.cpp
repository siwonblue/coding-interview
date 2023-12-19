#include <iostream>
#include <algorithm>
using namespace std;

int arr[1000] = {5,3,7,8,6,2,9,4};
int dp[1000];

int main(void){
  int len = sizeof(arr)/sizeof(arr[0]);
  fill(dp,dp+1000,1);
  for(int i=0;i<len;i++){
    for(int j=i-1;j>=0;j--){
      if(arr[j]<arr[i]) dp[i] = max(dp[i],dp[j]+1);
    }
  }
  for(int i=0;i<8;i++) cout <<  dp[i] << " ";
}