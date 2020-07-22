// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  return numbers.sort((a, b) => a - b)[0];
};

var minArrayV1 = function(numbers) {
  var min = numbers[0];
  for (const val of numbers) {
    min = min > val ? val : min;
  }
  return min;
}

var getTranslateArray = function(numbers) {
  var res = {
    arr: [],
    count: 0,
  }
  for (var i = 0; i < numbers.length - 1; i++) {
    numbers.push(numbers.shift());
    res.arr.push(numbers);
    res.count ++;
  }
  return res;
}

console.log(minArrayV1([3, 4, 5, 1, 2]));
console.log(minArrayV1([2, 2, 2, 0, 1]));
console.log(getTranslateArray([1, 2, 3, 4, 5]));