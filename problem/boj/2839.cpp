#include <iostream>
#include <vector>
#include <queue>
using namespace std;


const int impossible = -1;



struct Node {
    int leftover;
    int depth;
};

void BFS(int init, int target) {
    queue<Node> q;
    vector<int> memo(target + 1, impossible);
    q.push({init, 0});
    memo[0] = 0;

    while (!q.empty()) {
        Node node = q.front();
        q.pop();

        for (int sugar : {3, 5}) {
            if (node.leftover + sugar <= target && memo[node.leftover + sugar] == impossible) {
                memo[node.leftover + sugar] = node.depth + 1;
                q.push({node.leftover + sugar, node.depth + 1});
            }
        }
    }

    cout << memo[target] << endl;
}

int main() {
    int n;
    cin >> n;
    BFS(0, n);
    return 0;
}
