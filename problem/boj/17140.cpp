#include <iostream>
#include <vector>
using namespace std;

int R,C,K,x,y,z;
vector<vector<int>> arr = {4,vector(4,0)};

bool is_done(){
  if(arr[R][C] == K) return true;
  else return false;
}

bool is_r_operation(){
  if(arr.size()>=arr[0].size()) return true;
  else return false;
}


void operation(){

  int sec = 0;
  int magic_num = 100;
  while(true){
    // 예외처리: 타임오버
    if(sec==magic_num) break;
    // 예외처리: 조건 만족했는지 확인
    if(is_done()) break;
    
    if(is_r_operation()){
      // r 일때 수행
      


    }else{
      // c 일 때 수행 
    }

    
    ++sec;
  }
}

int main(void){
  ios::sync_with_stdio(false);
  cin.tie(0);
  freopen("input.txt","r",stdin);

  //input
  cin >> R >> C >> K;
  for(int i=1;i<=3;i++){
    cin >> x>>y>>z;
    arr[i][1] = x;
    arr[i][2] = y;
    arr[i][3] = z;
  }  
  operation();
}