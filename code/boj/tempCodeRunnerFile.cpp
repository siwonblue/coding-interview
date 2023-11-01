#include <iostream>
#include <string>
#include <vector>
#include <cstring>
using namespace std;
vector<vector<int>> graph;
vector<int> visit;


void DFS(int i){
  for(int idx=0;idx<graph[i].size();idx++){
    if(!graph[i][idx]) continue;
    if(visit[idx]) continue;
    visit[idx] = 1;
    DFS(idx);
  }
}

int main(){
  int N, num;
  cin >> N;
  
  graph.resize(N, vector<int>(N));
  visit.resize(N, 0);
  
  for(int i=0;i<N;i++){
    for(int j=0;j<N;j++){
      cin >> num;
      graph[i][j] = num;
    };
  };


  for(int i=0;i<N;i++){
    fill(visit.begin(),visit.end(),0);
    DFS(i);
    for(int j=0;j<N;j++){
      if(visit[j]) cout << "1 ";
      else cout << "0 ";
    };
    cout << "\n";
  }
  cout << endl;
  return 0;
}