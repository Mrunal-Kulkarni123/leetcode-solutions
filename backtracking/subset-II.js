var subsetsWithDup = function (nums) {
  let result = [];

  nums.sort((a, b) => a - b);

  let backTrack = (path, start) => {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      // Skip duplicate choices at the same level
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }

      // CHOOSE
      path.push(nums[i]);

      // EXPLORE
      backTrack(path, i + 1);

      // UNCHOOSE
      path.pop();
    }
  };

  backTrack([], 0);

  return result;
};
