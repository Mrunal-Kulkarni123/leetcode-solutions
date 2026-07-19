/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (arr) {
  let maxP = 0;
  let minB = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minB) {
      minB = arr[i];
    }
    let currP = arr[i] - minB;
    if (currP > maxP) {
      maxP = currP;
    }
  }
  return maxP;
};
