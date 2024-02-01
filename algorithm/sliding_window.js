// 부분합 찾기
// 윈도우 사이즈가 정해진 경우

function slidingWindow(arr, windowSize) {
  if (arr.length < windowSize) return [];

  let sum = arr.slice(0, windowSize).reduce((acc, cur) => acc + cur, 0);
  let ans = [sum];
  for (let i = windowSize; i < arr.length; i++) {
    sum += arr[i] - arr[i - windowSize];
    ans.push(sum);
  }
  return ans;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const windowSize = 3;

console.log(slidingWindow(arr, windowSize));
