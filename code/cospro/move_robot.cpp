// 다음과 같이 include를 사용할 수 있습니다.
#include <iostream>
#include <string>
#include <vector>
#include <map>

using namespace std;



vector<int> solution(string commands) {
		vector<int> answer = {0,0};
    map<char, vector<int>> direction = {
			{'U',{0,1}},
			{'R',{1,0}},
			{'D',{0,-1}},
			{'L',{-1,0}}
		};
		for(auto c : commands){
			answer[0] += direction[c][0];
			answer[1] += direction[c][1];
		}
    return answer;
}