#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int N,M,R;
int cnt=1;
vector<vector<int>> maps;
vector<int> visit;
vector<int> ans;

void DFS(int v){
  ans[v] = cnt++;
  for(int i=0;i<maps[v].size();i++){
    int cur = maps[v][i];
    if(visit[cur]) continue;
    visit[cur] = 1;
    DFS(cur);
  }
}

int main(void){
  ios::sync_with_stdio(0);
  cout.tie(0);
  cin >> N >> M >> R;
  maps.resize(N+1, vector<int>());
  visit.resize(N+1, 0);
  ans.resize(N+1, 0);
  for(int i=0;i<M;i++){
    int start,end;
    cin >> start >> end;
    maps[start].push_back(end);
    maps[end].push_back(start);
  }
  for(int i=0;i<maps.size();i++){
    sort(maps[i].begin(), maps[i].end());
    // for(int j=0;j<maps[i].size();j++){
    //   cout << maps[i][j] << " ";
    // }
    // cout << "\n";
  }
  visit[R] = cnt;
  DFS(R);
  for(int i=1;i<ans.size();i++)
    cout << ans[i] << "\n";
}