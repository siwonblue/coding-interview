#include<iostream>
#include<vector>
#include<cmath>
#include <iomanip>

using namespace std;

int N,K,a,b;
const int decimal = 1e2;
vector<int> scores;

int main(int argc, char** argv)
{
   
   cin >> N >> K;
   scores.resize(N+1);
   for(int i=1;i<=N;i++) cin >> scores[i];
  
   for(int i=0;i<K;i++){
     double sum = 0;
     cin >> a >>b;
     for(int j=a;j<=b;j++) sum += scores[j];
     sum /= (b-a+1);
     sum = round(sum*decimal)/decimal;
     cout << fixed << setprecision(2) << sum <<"\n";
   }
   return 0;
}