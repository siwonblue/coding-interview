const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];
const hash = {};
const answer = {};

function calc(num, IN, OUT, fees) {
  let inTime = 0;
  let outTime = 0;
  inTime += +IN.split(":")[0] * 60 + +IN.split(":")[1];
  outTime += +OUT.split(":")[0] * 60 + +OUT.split(":")[1];
  const sub = outTime - inTime;
  if (sub <= fees[0]) {
    return fees[1];
  }
  delete hash[num];
  return Math.ceil(sub / fees[2]) * fees[3];
}

function convertToMin(time) {
  return +time.split(":")[0] * 60 + +time.split(":")[1];
}

function solution(fees, records) {
  // 차량 목록 획득
  const cars = records.map((record) => record.split(" ")[1]);
  [...new Set(cars)].map((car) => (answer[car] = 0));

  // 데이터 저장
  records.map((record) => {
    const input = record.split(" ");
    const time = input[0];
    const num = input[1];
    const type = input[2];
    if (type === "IN") answer[num] -= convertToMin(time);
    else answer[num] += convertToMin(time);
  });
  Object.keys(answer).map((num) => {
    if (answer[num] <= 0) answer[num] += 1439;
    const accumulative = answer[num];
    hash[num] = fees[1];
    if (accumulative > fees[0])
      hash[num] += Math.ceil((accumulative - fees[0]) / fees[2]) * fees[3];
  });
  const sorted = Object.entries(hash).sort(
    (a, b) => Number(a[0]) - Number(b[0])
  );
  return sorted.map((a) => a[1]);
}
