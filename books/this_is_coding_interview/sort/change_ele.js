const input = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");
const [N, K] = input.shift().split(" ").map(Number);
const A = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const B = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let ans = 0;
console.log(A);
console.log(B);
for (let i = 0; i < N; i++) i < K ? (ans += B[i]) : (ans += A[i]);
console.log(ans);
