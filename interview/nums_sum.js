// Alibaba

function sum1(nums) {
  let res = 0;
  for (const val of nums) {
    res +=val;
  }
  return res;
}

function sum2(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += nums[i];
  }
  return res;
}

function sum3(nums) {
  let res = 0;
  nums.forEach(value => {
    res += value;
  });
  return res;
}

function sum4(nums) {
  return nums.reduce((cur, pre) => pre + cur);
}

function sum5(nums) {
  return eval(nums.join('+'));
}


console.log(sum1([1, 2, 3]));
console.log(sum2([1, 2, 3]));
console.log(sum3([1, 2, 3]));
console.log(sum4([1, 2, 3]));
console.log(sum5([1, 2, 3]));