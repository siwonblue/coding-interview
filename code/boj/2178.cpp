#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

vector<vector<int>> maps;
vector<vector<int>> visit;
const vector<int> dx = {-1,0,1,0};
const vector<int> dy = {0,1,0,-1};
int ans=INT_MAX;
int N,M;

void DFS(int x, int y, int distance){
  visit[x][y] = 1;
  if(x== N-1 && y==M-1){
    ans = min(distance, ans);
    return;
  }
  for(int i=0;i<4;i++){
    int nx = x + dx[i];
    int ny = y + dy[i];
    if(nx<0 || ny<0 || nx>=N||ny>=M) continue;
    if(maps[nx][ny]==0) continue;
    if(visit[nx][ny]) continue;
    DFS(nx,ny,++distance);
  }
}

int main(){
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);

  cin >> N >> M;
  maps.resize(N, vector<int>(M));
  visit.resize(N, vector<int>(M,0));
  for(int i=0;i<N;i++){
    string row;
    cin >>row;
    for(int j=0;j<M;j++){
      maps[i][j] = row[j] - '0';
    }
  }
  DFS(0,0,0);
  cout << ans;
  // for(int i=0;i<N;i++){
  //   for(int j=0;j<M;j++){
  //     cout << maps[i][j] << " ";
  //   }
  //   cout << "\n";
  // }

  return 0;
}