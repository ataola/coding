/**
 * @param {number[]} nums
 * @return {number}
 */
const tupleSameProduct = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1;
    while (j >= 0) {
      if (i !== j) {
        const num = nums[i] * nums[j];
        if (obj[num]) {
          obj[num]++;
        } else {
          obj[num] = 1;
        }
      }
      j--;
    }
  }
  let count = 0;
  for (const key of Object.keys(obj)) {
    if (obj[key] >= 4) {
      const num = obj[key] / 2;
      count = count + num * (num - 1) * 4;
    }
  }
  return count;
};

export default tupleSameProduct;
