const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/jeonsiwon/Desktop/coding-interview/problem/boj/input.txt";
const [A, B] = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .split(" ")
  .map(Number);

const src = [];
for (let i = 1; i <= 45; i++) {
  for (let j = 0; j < i; j++) src.push(i);
}
console.log(src.slice(A - 1, B).reduce((acc, cur) => acc + cur, 0));
