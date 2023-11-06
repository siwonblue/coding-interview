#include <iostream>
#include <string>
using namespace std;


// O(N^2)
// int func2(int arr[], int len){
//   for(int i=0;i<len;i++){
//     for(int j=0;j<len;j++){
//       if(i==j) continue;
//       if(arr[i]+arr[j]==100) return 1;
//     }
//   }
//   return 0;
// }

// O(1)
int func2(int arr[], int len){
  int occur[101] = {};
  for(int i=0;i<len;i++){
    if(occur[100-arr[i]]) return 1;
    occur[arr[i]] = 1;
  }
  return 0;
}

int main(void){
  ios::sync_with_stdio(0);
  cout.tie(0);
  

}