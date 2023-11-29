// 다음과 같이 include를 사용할 수 있습니다.
#include <iostream>
#include <string>
#include <vector>
using namespace std;

vector<int> dx = {-1,0,1,0};
vector<int> dy = {0,1,0,-1};


bool isDone(vector<vector<int>> &garden){
    int len = garden[0].size();
    for(int i=0;i<len;i++){
        for(int j=0;j<len;j++){
            if(garden[i][j]==0) return false;
        }
    }
    return true;
}

void operation(vector<vector<int>> &garden, int x, int y, vector<vector<int>> &visit){
    int len = garden[0].size();
    visit[x][y] = 1;
    for(int i=0;i<4;i++){
        int nx = x + dx[i];
        int ny = y + dy[i];
        if(nx<0 || ny<0 || nx>=len || ny>=len) continue;
        if(garden[nx][ny]==1) continue;
        garden[nx][ny] = 1;
        visit[nx][ny] = 1;
    }
}

int solution(vector<vector<int>> garden) {
    int day = 0;
    int len = garden[0].size();
    while(!isDone(garden)){
        
        vector<vector<int>> visit(len, vector<int>(len,0));
        
        for(int i=0;i<len;i++){
            for(int j=0;j<len;j++){
                if(garden[i][j]==0 || visit[i][j]==1) continue;
                operation(garden,i,j, visit);
            }
        }
        
        day+=1;
    }
    return day;
}

// 아래는 테스트케이스 출력을 해보기 위한 main 함수입니다.
int main() {
    vector<vector<int>> garden1 = {{0, 0, 0}, {0, 1, 0}, {0, 0, 0}};
    int ret1 = solution(garden1);
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    cout << "solution 함수의 반환 값은 " << ret1 << " 입니다." << endl;
    
    vector<vector<int>> garden2 = {{1, 1}, {1, 1}};
    int ret2 = solution(garden2);
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    cout << "solution 함수의 반환 값은 " << ret2 << " 입니다." << endl;
}