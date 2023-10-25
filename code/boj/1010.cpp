#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> memo;

int combination(int n, int r) {
    if (memo[n][r]) return memo[n][r];
    if (n == r || r == 0) return 1;
    return memo[n][r] = combination(n-1, r-1) + combination(n-1, r);
}

int main() {
    int N, n, r;
    cin >> N;
    for (int i = 0; i < N; i++) {
        cin >> r >> n;
        memo = vector<vector<int>>(n+1, vector<int>(r+1,0));
        cout << combination(n, r) << endl;
    }
    return 0;
}
