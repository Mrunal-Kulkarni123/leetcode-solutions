/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);
  let backTrack = (path, start, remainingSum) => {
    if (remainingSum === 0) {
      result.push([...path]);
    }
    if (remainingSum < 0) {
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i - 1] === candidates[i]) continue;
      path.push(candidates[i]);
      backTrack(path, i + 1, remainingSum - candidates[i]);
      path.pop();
    }
  };
  backTrack([], 0, target);
  return result;
};
