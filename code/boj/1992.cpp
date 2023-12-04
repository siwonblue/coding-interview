#include <iostream>
#include <vector>
using namespace std;

int N;
string str;
vector<vector<string>> maps;

void input(){
  cin >> N;
  maps.resize(N);
  for(int i=0;i<N;i++){
    cin >> str;
    vector<string> row;
    row.resize(N);
    for(int j=0;j<str.size();j++) row[j] = str[j];
    maps[i] = row;
  }
  // for(int i=0;i<maps.size();i++){
  //   for(int j=0;j<maps[i].size();j++){
  //     cout << maps[i][j] << " ";
  //   }
  //   cout << "\n";
  // }
}

void operation(int x, int y, int n){

  // check same or differnt 
  bool same = true;
  for(int i=x;i<n+x;i++){
    for(int j=y;j<n+y;j++){
      if(maps[i][j]!=maps[x][y]){
        same = false;
        break;
      }
    }
  }

  // same
  if(same){
    cout << maps[x][y];
    return;
  }
  
  // different
  int next = n/2;
  cout << "(";
  operation(x,y,next);
  operation(x,y+next,next);
  operation(x+next,y,next);
  operation(x+next,y+next,next);
  cout << ")";
}

void solution(){
  input();
  operation(0,0,N);
  cout << endl;
}

int main(void){
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);
  freopen("input.txt","r",stdin);
  solution();
}