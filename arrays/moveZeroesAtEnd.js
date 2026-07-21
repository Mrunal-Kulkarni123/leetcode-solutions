/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      let temp = arr[x];
      arr[x] = arr[i];
      arr[i] = temp;
      x++;
    }
  }
  for (let i = x + 1; i < arr.length; i++) {
    arr[i] = 0;
  }
};
