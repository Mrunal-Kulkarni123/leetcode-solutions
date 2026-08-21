var thirdMax = function (nums) {
  let largest = -Infinity;
  let sLargest = -Infinity;
  let tLargest = -Infinity;

  for (let num of nums) {
    if (num === largest || num === sLargest || num === tLargest) {
      continue;
    }

    if (num > largest) {
      tLargest = sLargest;
      sLargest = largest;
      largest = num;
    } else if (num > sLargest) {
      tLargest = sLargest;
      sLargest = num;
    } else if (num > tLargest) {
      tLargest = num;
    }
  }

  return tLargest === -Infinity ? largest : tLargest;
};
