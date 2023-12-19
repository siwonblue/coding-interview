#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct Node{
  int num;
  int depth;
};

void BFS(int init, int target){
  queue<Node> q;
  q.push({init, 0});
  vector<int> memo(target+1,0);

  while(!q.empty()){
    Node node = q.front();
    q.pop();
    int cur = node.num;
    int depth = node.depth;
    if( cur+1 <= target && memo[cur+1]==0){
      memo[cur+1]= depth+1;
      q.push({cur+1,depth+1});
    };
    if( cur*2 <=target && memo[cur*2]==0){
      memo[cur*2]= depth+1;
      q.push({cur*2,depth+1});
    };
    if(cur*3 <=target && memo[cur*3]==0){
      memo[cur*3]= depth+1;
      q.push({cur*3,depth+1});
    };
  }
  // for(int i=0;i<=target;i++){
  //   cout << memo[i] << ' ';
  // }
  // cout << endl;
  cout << memo.back() << endl;
};

int main(){
  int target;
  cin >> target;
  BFS(1, target);
  return 0;
};