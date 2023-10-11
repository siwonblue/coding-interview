const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const src = input[1].split(" ").map(Number);

// get cumulativeSum of original array
const cumulativeSum = [];
src.forEach((num, i) => {
  if (i === 0) cumulativeSum[i] = num;
  else cumulativeSum[i] = cumulativeSum[i - 1] + num;
});

function solution() {
  let ans = "";
  for (let idx = 2; idx < src.length; idx++) {
    const [i, j] = input[idx].split(" ").map(Number);
    ans += `${cumulativeSum[j - 1] - (i - 2 < 0 ? 0 : cumulativeSum[i - 2])}\n`;
  }
  return ans.trim();
}

console.log(solution());
