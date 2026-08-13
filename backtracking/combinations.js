/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  let backTrack = (path, start) => {
    if (path.length == k) {
      result.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      //CHOOSE
      path.push(i);
      //EXPLORE
      backTrack(path, i + 1);
      //UNCHOOSE
      path.pop();
    }
  };
  backTrack([], 1);
  return result;
};
