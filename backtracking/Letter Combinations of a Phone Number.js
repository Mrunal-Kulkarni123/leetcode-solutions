/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length == 0) return [];
  let letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let result = [];
  function backTrack(path, start) {
    if (path.length == digits.length) {
      result.push(path.join(""));
      return;
    }
    let choice = letters[digits[start]];
    for (let i = 0; i < choice.length; i++) {
      path.push(choice[i]);
      backTrack(path, start + 1);
      path.pop();
    }
  }

  backTrack([], 0);
  return result;
};
