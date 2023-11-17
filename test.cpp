#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int N;
vector<int> dx = {-1,0,1,0};
vector<int> dy = {0,1,0,-1};
vector<vector<int>> map;
vector<vector<int>> visit;

bool DFS(int x,int y, int& cnt){
	if(visit[x][y]) return false;
	visit[x][y] = 1;
	cnt++;
  for(int i=0;i<4;i++){
		int nx = x + dx[i];
		int ny = y + dy[i];
		if(nx<0 || ny<0 || nx>=N || ny>=N || map[nx][ny]==0) continue;
		if(visit[nx][ny]) continue;
		DFS(nx,ny, cnt);
	}
	return true;
}

void solution(){
	int cnt = 0;
	vector<int> ans = {};
	for(int i=0;i<N;i++){
		for(int j=0;j<N;j++){
			if(map[i][j]==0) continue;
			if(visit[i][j]) continue;
			int square=0;
			if(DFS(i,j,square)){
				cnt++;
				ans.push_back(square);
			};
		}
	}
	sort(ans.begin(), ans.end());
	cout <<cnt << "\n";
	for(auto c:ans) cout << c << " ";
}

int main() {
	cin >> N;
	map.resize(N);
	visit.resize(N, vector<int>(N,0));
	for(int i=0;i<N;i++){
		for(int j=0;j<N;j++){
			int a;
			cin >> a;
			map[i].push_back(a);
		}
	}
	// for(auto c:visit){
	// 	for(int i=0;i<c.size();i++){
	// 		cout << c[i] << " ";
	// 	}
	// 	cout << "\n";
	// }
	solution();
	
}