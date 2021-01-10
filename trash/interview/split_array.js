/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  var left = Math.max(...nums);
  var right = nums.reduce((pre, cur) => pre + cur);
  if (nums.length === m) {
    return left;
  }
  if (m === 1) {
    return right;
  }

  while(left < right) {
    var mid = (left + right) >> 1;
    var cnt = 1;
    var sum = 0;
    for (const val of nums) {
      if (sum + val > mid) {
        sum = 0;
        cnt++;
      }
      sum += val;
    }
    if (cnt > m) {
      left = mid + 1;
    } else {
      right = mid;
    }
  } 
  return left;
};


console.log(splitArray([7,2,5,10,8], 2));
