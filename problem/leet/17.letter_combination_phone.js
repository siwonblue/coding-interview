var keyPad = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  var ans = [];
  if (digits === "") return ans;

  var BT = function BT(index, letter) {
    if (letter.length === digits.length) {
      ans.push(letter);
      return;
    }
    const num = digits[index];
    const chars = keyPad[num];

    for (const char of chars) BT(index + 1, letter + char);
  };

  BT(0, "");
  return ans;
};
// console.log(letterCombinations("23"));
