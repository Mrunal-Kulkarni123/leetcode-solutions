/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let one = 0;
  let two = nums.length - 1;
  while (one <= two) {
    if (nums[one] + nums[two] == target) {
      return [one + 1, two + 1];
    } else if (nums[one] + nums[two] > target) {
      two--;
    } else {
      one++;
    }
  }
};
