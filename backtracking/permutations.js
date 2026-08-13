/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let backTrack = (path) => {
    if (path.length == nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      //CHOOSE
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        //EXPLORE
        backTrack(path);
        //UNCHOOSE
        path.pop();
      }
    }
  };
  backTrack([]);

  return result;
};
