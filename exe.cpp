#include <string>
#include <vector>
#include <iostream>

using namespace std;

int solution(int n) {
    int answer = 0;
    for(int i=n;n>0;n-=2) answer+=n; 
    return answer;
}
int main(){
    solution(5);
    return 0;
}