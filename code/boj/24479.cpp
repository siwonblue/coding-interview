#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> maps;
vector<int> visit;
vector<int> ans;
int order = 0;

void DFS(int cur){
  if(visit[cur]) return;
  visit[cur] = 1;
  ans[cur]=++order;
  vector<int> &connected = maps[cur];
  sort(connected.begin(), connected.end());

  // cout<< cur<<"에 연결된 점";
  // for(int i=0;i<connected.size();i++){
  //   cout << connected[i] << " ";
  // };
  // cout << "\n";

  for(int i=0; i<connected.size();i++){
    if(visit[connected[i]]) continue;
    // cout << cur << "에서"<<connected[i] << "으로 이동" << "\n";
    DFS(connected[i]);
  }
}

int main(){
  int n,m,r,u,v;
  cin >> n >> m >> r;

  maps.resize(n+1, vector<int>());
  visit.resize(n+1, 0);
  ans.resize(n+1,0);
  for(int i=0;i<m;i++){
    cin >> u >> v;
    maps[u].push_back(v);
    maps[v].push_back(u);
  };
  
  DFS(r);

  // for(int i=1;i<n;i++){
  //   vector<int> temp = maps[i];
  //   cout << i <<"번째" ;
  //   for(int j=0;j<temp.size();j++){
  //     cout << temp[j] << " ";
  //   }
  //   cout << "\n";
  // }

  for(int i=1;i<ans.size();i++){
    cout << ans[i] << "\n";
  };
  
  return 0;
};