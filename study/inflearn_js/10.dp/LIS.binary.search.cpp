// 이진 탐색을 사용하여 최대 증가 부분수열(Longest Increasing Subsequence, LIS) 문제를 해결하는 C++ 코드는 다음과 같습니다. 
// 이 코드는 std::lower_bound 함수를 사용하여 이진 탐색을 수행합니다. 이 함수는 주어진 범위에서 특정 값 이상인 첫 번째 원소의 위치를 반환합니다.
// 이 코드는 주어진 배열을 순회하며, 각 원소에 대해 LIS 배열에서 적절한 위치를 찾아 업데이트합니다. 
// LIS 배열의 길이가 최종적인 최대 증가 부분수열의 길이가 됩니다.


#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int longestIncreasingSubsequence(const vector<int>& arr) {
    if (arr.empty()) return 0;
    vector<int> lis;
    for (int x : arr) {
        auto it = lower_bound(lis.begin(), lis.end(), x); // 이진 탐색
        if (it == lis.end()) lis.push_back(x); // 새로운 최대값 추가
        else *it = x; // 기존 위치 업데이트 
    }
    return lis.size();
}

int main() {
    vector<int> arr = {10, 22, 9, 33, 21, 50, 41, 60, 80}; // 예제 입력
    int length = longestIncreasingSubsequence(arr);
    cout << "Length of the Longest Increasing Subsequence is " << length << endl;
    return 0;
}
