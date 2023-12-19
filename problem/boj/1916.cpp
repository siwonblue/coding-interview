#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

int N,M,A,B;
int INF = 1e9;
vector<vector<pair<int,int>>> map;
vector<int> dist;

void input(){
  cin >> N >> M;
  map.resize(N+1);
  dist.resize(N+1);
  for(int i=1;i<=M;i++){
    int start, end, dis;
    cin >> start >> end >> dis;
    map[start].push_back(make_pair(end,dis));
  }
  cin >> A >> B;
  // for(int i=1;i<map.size();i++){
  //   cout << i <<"에 연결된 점";
  //   for(int j=0;j<map[i].size();j++){
  //     cout << map[i][j].first << " ";
  //   }
  //   cout<<"\n";
  // }

}

void dijkstra(int start){
  priority_queue<pair<int,int>> pq;
  pq.push(make_pair(0,start));
  for(int i=0;i<dist.size();i++) dist[i] = INF;
  dist[start] = 0;
  while(!pq.empty()){
    int cost = -pq.top().first;
    int cur_node = pq.top().second;
    pq.pop();
    for(int i=0;i<map[cur_node].size();i++){
      int next = map[cur_node][i].first;
      int next_cost = map[cur_node][i].second;
      if(dist[next] > cost + next_cost){
        dist[next] = cost + next_cost;
        pq.push(make_pair(-dist[next], next));
      }
    }
  }
  
  // for(int i=1;i<dist.size();i++) cout << dist[i] << " ";
  // cout << "\n";
}


void solution(){
  input();
  dijkstra(A);
  cout << dist[B];
}

int main(void){
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);
  freopen("input.txt", "r", stdin);
  solution();
}