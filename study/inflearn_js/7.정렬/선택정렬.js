// 오름차순 정리

let arr = [5, 4, 3, 2, 1];

for (let i = 0; i < arr.length - 1; i++) {
  let idx = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[idx]) idx = j;
  }
  [arr[idx], arr[i]] = [arr[i], arr[idx]];
}
console.log(arr);
