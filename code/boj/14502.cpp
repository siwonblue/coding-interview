#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;

vector<vector<int>> maps;
const vector<int> dx = {-1,0,1,0};
const vector<int> dy = {0,1,0,-1};
int N,M;

void BFS(int x, int y){
  queue<pair<int,int>> q;
  q.push({x,y});

  while(!q.empty()){
    pair<int,int> current = q.front();
    int x = current.first;
    int y = current.second;
    q.pop();
    for(int i=0;i<4;i++){
      int nx = x + dx[i];
      int ny = y + dy[i];
      if(nx<0 || ny<0 || nx>=N || ny>=M) continue;
      if(maps[nx][ny]==0) {
        q.push({nx,ny});
        maps[nx][ny] = 2;
      };
    }
  }

  // 1. 2이거나
  // 2. 1이거나
  // 맵을 튀어나갔으면 안함.
}

int main(){
  ios::sync_with_stdio(false);
	cin.tie(0);
 	cout.tie(0);

  cin >> N >> M;
  maps.resize(N,vector<int>(M));
  for(int i=0;i<N;i++){
     for(int j = 0; j < M; j++){
      cin >> maps[i][j]; 
    }
  }

  return 0;
}