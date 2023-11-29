// 다음과 같이 include를 사용할 수 있습니다.
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> arr) {
		int answer = 0;
		int cnt = 1;
    for(int i=1;i<arr.size();i++){
			if(arr[i-1] < arr[i]) cnt+=1;	
			else {
				answer = max(answer, cnt);
				cnt = 1;
			};
		}
		answer = max(answer, cnt);
    return answer;
}
