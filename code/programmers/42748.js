function solution(array, commands) {
  const answer = [];
  const len = commands.length;
  for (let idx = 0; idx < len; idx++) {
    const command = commands[idx];
    const [i, j, k] = command;
    answer.push([...array].slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }

  return answer;
}
