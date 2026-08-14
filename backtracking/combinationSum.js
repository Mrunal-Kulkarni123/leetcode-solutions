/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  let backTrack = (path, start, remainingSum) => {
    if (remainingSum === 0) {
      result.push([...path]);
    }
    if (remainingSum < 0) {
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backTrack(path, i, remainingSum - candidates[i]);
      path.pop();
    }
  };
  backTrack([], 0, target);
  return result;
};
