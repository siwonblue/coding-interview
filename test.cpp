#include <iostream>
using namespace std;
class Job{
private:
  int a;  
public:
  Job(int a){
    this->a=a;
  };
  void siwon(){
    cout << "??";
  }
};

void solution(){
  Job job(3);
  job.siwon();
}

int main(void){
  solution();
}