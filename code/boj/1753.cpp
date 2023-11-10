#include <iostream>
#include <vector>
#include <queue>
#include <cstdio> 

using namespace std;

int V,E,K;
int INF = 1e9;
vector<vector<pair<int,int>>> maps;
vector<int> ans;

void input(){
  cin >> V >> E >> K;
  maps.resize(V+1);
  ans.resize(V+1, INF);
  for(int i=0;i<E;i++){
    int start,end,dis; cin >> start >> end >> dis;
    maps[start].push_back(make_pair(end,dis));
  }

  // for(int i=1;i<=maps.size();i++){
  //   cout << i <<"에 연결된 점들" << "\n";
  //   for(int j=0;j<maps[i].size();j++){
  //     cout << maps[i][j].first << " " << maps[i][j].second;
  //     cout << "\n";
  //   }
  //   cout << "\n";
  // }
}

void dijkstra(){
  priority_queue<pair<int, int>> pq;
  pq.push(make_pair(0,K));
  ans[K] = 0;
  while(!pq.empty()){
    int cost = -pq.top().first;
    int cur = pq.top().second;
    pq.pop();
    for(int i=0;i<maps[cur].size();i++){
      int next = maps[cur][i].first;
      int nCost = maps[cur][i].second;
      if( ans[next] > nCost + cost){
        ans[next] = nCost + cost;
        pq.push(make_pair(-ans[next], next));
      }
    }
  }
}

void solution(){
  input();
  dijkstra();

  for(int i=1;i<ans.size();i++){
    if(ans[i]==INF) cout << "INF" << "\n";
    else cout << ans[i] << "\n";
  }
}

int main(void){
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);
  // freopen("Input.txt", "r", stdin);
  solution();
}