const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/jeonsiwon/Desktop/coding-interview/code/boj/input.txt";
const str = require("fs").readFileSync(filePath, "utf-8").toString();

function solution() {
  let zero = 0;
  let one = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i + 1]) {
      if (str[i] === "0") zero += 1;
      else one += 1;
    }
  }
  console.log(Math.min(zero, one));
}
solution();
