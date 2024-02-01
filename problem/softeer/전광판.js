const digit = {
  0: "1110111",
  1: "0010010",
  2: "1011101",
  3: "1011011",
  4: "0111010",
  5: "1101011",
  6: "1101111",
  7: "1110010",
  8: "1111111",
  9: "1111011",
  " ": "0000000",
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  if (line === "") rl.close();
  else input.push(line.split(" ").map(Number));
});
rl.on("close", () => {
  const [n] = input[0];
  for (let i = 1; i <= n; i++) {
    let [first, second] = input[i];
    first = " ".repeat(5 - first.toString().length) + first;
    second = " ".repeat(5 - second.toString().length) + second;
    ans = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 7; j++) {
        if (Number(digit[first[i]][j]) !== Number(digit[second[i]][j]))
          ans += 1;
      }
    }
    console.log(ans);
  }
});
