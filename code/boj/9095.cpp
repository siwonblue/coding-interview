#include <iostream>
#include <vector>
using namespace std;

int main() {
    int cnt = 0;
    int n;
    cin >> n;
    while (n>0) {
        int target;
        cin >> target;
        vector<int> memo(target + 1, 0);
        memo[1] = 1;
        memo[2] = 2;
        memo[3] = 4;
        for (int i = 4; i <= target; i++) {
            memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
        };
        cout << memo.back() << endl;
        n-=1;
    }
    return 0;
}
