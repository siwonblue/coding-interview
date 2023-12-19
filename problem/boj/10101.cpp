#include <iostream>
using namespace std;
int a,b,c;
int main(void){
  freopen("input.txt","r",stdin);
  cin >> a >> b >> c;
  if(a+b+c==180){
    if(a==60 && b==60 && c==60) cout << "Equilateral";
    else if(a!=b && b!=c && c!=a) cout << "Scalene";
    else   cout << "Isosceles";
  }else cout << "Error";
}