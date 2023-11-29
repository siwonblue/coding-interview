// 다음과 같이 include를 사용할 수 있습니다.
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> arr, int K) {
		int answer = 0;
    for(int i=0;i<arr.size();i++)
		for(int j=i+1;j<arr.size();j++)
		for(int k=j+1;k<arr.size();k++)
			if((arr[i]+arr[j]+arr[k])%k==0) answer+=1;
    return answer;
}
