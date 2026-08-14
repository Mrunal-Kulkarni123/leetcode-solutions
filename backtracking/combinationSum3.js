/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];
  let backTrack = (path, start, remainingSum) => {
    if (path.length == k && remainingSum == 0) {
      result.push([...path]);
    }
    for (let i = start; i < 10; i++) {
      path.push(i);
      backTrack(path, i + 1, remainingSum - i);
      path.pop();
    }
  };
  backTrack([], 1, n);
  return result;
};
