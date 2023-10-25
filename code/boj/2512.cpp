#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int binary_search(int total, vector<int> budgets){
  int start = 1;
  int end = budgets.back();
  int mid;
  int ans;
 
  while(start<=end){
    mid = (start+end)/2;
    long long sum = 0;
    for(int i=0;i<budgets.size();i++)
      sum += min(mid, budgets[i]);
    
    if(sum <= total) {
      ans = mid;
      start = mid + 1;
    }
    else {
      end = mid - 1;
    };
  }
  return ans;
}

int main(){
  int N, total;
  cin >> N;
  
  vector<int> budgets(N, 0);
  for(int i=0;i<N;i++) cin >> budgets[i];
  
  sort(budgets.begin(),budgets.end());
  cin >> total;

  cout << binary_search(total, budgets);
  return 0;
}