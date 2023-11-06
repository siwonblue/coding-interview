#include<iostream>
#include<string>
using namespace std;

// int main(void){
//   ios::sync_with_stdio(0);
//   cout.tie(0);
//   string s;
//   cin >> s;
  
//   for(char a='a';a<='z';a++){
//     int cnt=0;
//     for(auto c:s){
//       if(c==a) cnt+=1;
//     }
//     cout << cnt << " ";
//   }
//   cout << endl;
// }

int freq[26];
int main(void){
  ios::sync_with_stdio(0);
  cout.tie(0);
  string s;
  cin >> s;
  for(auto c:s)
    freq[c-'a']++;
  for(int c:freq)
    cout << c << " ";
  cout << endl;
}