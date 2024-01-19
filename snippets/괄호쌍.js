/**
 *
 * @param {} p string "(()))", 이런식의 괄호를 가지고 있는 문자열
 * @returns
 */

function check(p) {
  let stack = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") stack.push(p[i]);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(check("(()))"));
