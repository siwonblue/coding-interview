#include <iostream>
#include <vector>
using namespace std;

int n, r;
vector<vector<int>> memo;

int DFS(int n, int r) {
    if (memo[n][r] > 0) return memo[n][r];
    if (n == r || r == 0) return 1;
    return memo[n][r] = DFS(n-1, r-1) + DFS(n-1, r);
}

int main() {
    cin >> n >> r;
    memo = vector<vector<int>>(n + 1, vector<int>(r + 1, 0));
    cout << DFS(n, r) << endl;
    return 0;
}
