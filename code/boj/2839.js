const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const target = +require("fs").readFileSync(filePath, "utf-8").toString().trim();

const impossible = -1;
const memo = Array.from({ length: target + 1 }, () => impossible);
function BFS(init) {
  const stack = [];
  stack.push({ leftover: init, depth: 0 });
  memo[0] = 0;
  while (stack.length) {
    const { leftover, depth } = stack.shift();
    for (let sugar of [3, 5]) {
      if (memo[leftover + sugar] === impossible) {
        memo[leftover + sugar] = depth + 1;
        stack.push({ leftover: leftover + sugar, depth: depth + 1 });
      }
    }
  }
  console.log(memo[target]);
}
BFS(0);
