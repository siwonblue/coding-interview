# 숫자 나누고 자리수 구하기

```c++
#include <iostream>
#include <string>
#include <vector>

using namespace std;

// ret = 1en
int func_a(int n){
    int ret = 1;
    while(n > 0){
        ret *= 10;
        n--;
    }
    return ret;
}

// 자리수 계산
int func_b(int n){
    int ret = 0;
    while(n > 0){
        ret++;
        n /= 10;
    }
    return ret;
}

// 자리수 합
int func_c(int n){
    int ret = 0;
    while(n > 0){
        ret += n%10;
        n /= 10;
    }
    return ret;
}

int solution(int num) {
    int next_num = num;
    while(true){
        next_num++;
        int length = func_b(next_num);
        if(length % 2)
            continue;
        int divisor = func_a(length/2);

        int front = next_num / divisor;
        int back = next_num % divisor;

        int front_sum = func_c(front);
        int back_sum = func_c(back);
        if(front_sum == back_sum)
            break;
    }
    return next_num - num;
}
```

# 문자(열) 조작

```c++
  #include <string>

  "A" - 0 ; // int 65 ASIC

  string str = "siwon";
  str[0] // string "s"

  string str = "123";
  stoi(str) // int 123;
  stoll(str) // long long 123

  string name = "siwon jeon";
  name.substr(0,3) // siw 0,1,2
  name.substr(3) // 3부터 끝까지

  int num = 123;
  string str = to_string(123);

```

# 자리수 계산

```c++
  int a = 123;
  a /= 10; // 12 , int는 소수점 버림

```

# class 두 가지 방식

생성자를 쓰고 싶다면 클래스와 이름을 동일하게 해야 함.

스택 할당

```c++
class MyClass {
public:
    void myMethod() {
        cout << "스택 할당된 객체의 메서드 호출" << endl;
    }
};

int main() {
    MyClass obj; // 스택에 객체를 생성
    obj.myMethod(); // 메서드 호출
    return 0;
}


```

힙 할당

```c++
class MyClass {
public:
    void myMethod() {
        cout << "힙 할당된 객체의 메서드 호출" << endl;
    }
};

int main() {
    MyClass *obj = new MyClass(); // 힙에 객체를 생성
    obj->myMethod(); // 메서드 호출
    delete obj; // 객체 소멸
    return 0;
}
```

# c++ 입력 형태

인접 리스트 형태로 입력 받으면

```
5 5 4
5 7 8 2 3
1 4 5
5 2 4
3 2 3
1 2 3
```

```c++
  vector<vector<pair<int,int>>> maps;
  vector<int> dist;
  vector<int> items;
  int n,m,r;
  int INF = 1e9;

  void input(){
    cin >> n >> m >> r;
    maps.resize(n+1);
    items.resize(n+1,0);
    dist.resize(n+1, INF);
    for(int i=1;i<=n;i++){
      int item;
      cin >> item;
      items[i] = item;
    }
    // for(int i=1;i<items.size();i++) cout << items[i];
    for(int i=0;i<r;i++){
      int start, end, dis;
      cin >> start >> end >> dis;
      maps[start].push_back(make_pair(end,dis));
      maps[end].push_back(make_pair(start,dis));
    }

    // for(int i=1;i<maps.size();i++){
    //   cout << i << "에 연결된 점";
    //   for(int j=0;j<maps[i].size();j++){
    //     cout << maps[i][j].first  << " ";
    //   }
    //   cout << "\n";
    // }
  }
```

# 다익스트라

```c++
#include <iostream>
#include <vector>
#include <queue>
#include <cstring>
#include <algorithm>
using namespace std;

int N,E,v1,v2;
int INF = 1e9;
vector<vector<pair<int,int>>> maps;
vector<int> dist;


void input(){
  cin >> N >> E;
  maps.resize(N+1);
  dist.resize(N+1, INF);
  for(int i=0;i<E;i++){
    int start, end, dis;
    cin >> start >> end >> dis;
    maps[start].push_back(make_pair(end,dis));
    maps[end].push_back(make_pair(start,dis));
  }
  cin >> v1 >> v2;
  // for(int i=1;i<maps.size();i++){
  //   cout << i <<"에 연결된 점";
  //   for(int j=0;j<maps[i].size();j++){
  //     cout << maps[i][j].first << " ";
  //   }
  //   cout<<"\n";
  // }
}

void dijkstra(int start){
  priority_queue<pair<int,int>> pq;
  pq.push(make_pair(0,start));
  for(int i=0;i<dist.size();i++) dist[i] = INF; // 반드시 넣어야 함.
  dist[start] = 0;
  while(!pq.empty()){
    int cost = -pq.top().first; // 기본 최대힙이라서 마이너스 붙여서 최소힙으로 바꾼다.
    int cur_node = pq.top().second;
    pq.pop();
    for(int i=0;i<maps[cur_node].size();i++){
      int next = maps[cur_node][i].first;
      int next_cost = maps[cur_node][i].second;
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
  int ans = INF;
  input();

  dijkstra(1);
  int oneToV1 = dist[v1];
  int oneToV2 = dist[v2];

  dijkstra(v1);
  int v1ToV2 = dist[v2];
  int v1ToN = dist[N];

  dijkstra(v2);
  int v2ToN = dist[N];

	ans = min(ans, oneToV1 + v1ToV2 + v2ToN);
	ans = min(ans, oneToV2 + v1ToV2 + v1ToN);
	if (v1ToV2 == INF || ans == INF) cout << -1;
	else cout << ans;

}

int main(void){
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);
  // freopen("input.txt", "r", stdin);
  solution();
}

```
