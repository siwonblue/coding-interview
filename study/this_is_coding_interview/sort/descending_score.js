const input = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");
const N = +input.shift();
const people = [];
let ans = "";
for (let i = 0; i < N; i++) {
  const [name, score] = input[i].split(" ");
  people.push([name, +score]);
}

people.sort((a, b) => a[1] - b[1]);
console.log(people);
people.forEach((person) => (ans += `${person[0]} `));
console.log(ans.trim());
