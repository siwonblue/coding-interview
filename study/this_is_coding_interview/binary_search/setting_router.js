const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");
const [N, C] = input[0].split(" ").map(Number);
const maps = [];
for (let i = 1; i <= N; i++) maps.push(+input[i]);
const src = Array.from({ length: maps[maps.length - 1] }, (_, idx) => 1 + idx);
