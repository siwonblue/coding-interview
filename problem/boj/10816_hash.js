const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/jeonsiwon/Desktop/coding-interview/code/boj/input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .split("\n");

srcNum = input[1].split(" ").map(Number);
targetNum = input[3].split(" ").map(Number);
function solution() {
  let ans = "";
  const src = new Map();
  for (let i = 0; i < srcNum.length; i++)
    src.set(srcNum[i], src.get(srcNum[i]) ? src.get(srcNum[i]) + 1 : 1);
  for (let i = 0; i < targetNum.length; i++)
    ans += `${src.get(targetNum[i]) || 0} `;
  console.log(ans.trim());
}
solution();
