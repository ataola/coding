// https://leetcode-cn.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var res = x > 0 ? '' : '-';
  var x_abs_str = Math.abs(x) + '';
  res = res + x_abs_str.split('').reverse().join('');
  res = res - 0;
  return Math.abs(res) < Math.pow(2, 31) ? res : 0;
};


/**
 * @param {number} x
 * @return {number}
 */
var reverse_normal = function(x) {
  var MAX_VALUE = 2147483647;
  var MIN_VALUE = -2147483648;
  var res = 0;
  while( x !== 0) {
    res = res * 10 + x % 10;
    x = parseInt(x / 10);
  }
  return (MIN_VALUE < res && res < MAX_VALUE) ? res : 0;
};


console.log(reverse_normal(123));
console.log(reverse_normal(-123));
console.log(reverse_normal(120));
console.log(reverse_normal(1534236469));
console.log(reverse_normal(1563847412));
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991 
console.log(Number.MIN_VALUE); /// 5e-324
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991   
// 输入:
// 1534236469
// 输出
// 9646324351
// 预期结果
// 0

// 输入:
// 1563847412
// 输出
// 2147483651
// 预期结果
// 0

//2^31-1=2147483647,-2^31=-2147483648