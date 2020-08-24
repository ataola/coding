// 求X， 已知 x + 100 为一个平方数、x + 168也是一个平方数，请写出计算程序？

function getX(a, b) {
  const res = [];
  // a比b小就交换位置他俩
  if (a < b) {
    [a, b] = [b, a];
  }
  let dividend = a - b;
  let cur = dividend;
  if (dividend % 2 === 0) {
    // 循环被除数一半就好了
    while (cur >= Math.sqrt(dividend)) {
      if(cur % 2 === 0 && ((dividend / cur) % 2 === 0)) {
        res.push(((cur + dividend / cur) / 2) ** 2 - a);
      }
      // 无视奇数，直接到下个偶数
      cur = cur - 2;
    }
  } else {
    while (cur >= Math.sqrt(dividend)) {
      if(cur % 2 !== 0 && (dividend / cur) % 2 !== 0) {
        res.push(cur / 2 + dividend / (2 * cur) - a);
      }
      cur--;
    }
  }
  return res;
}

const res = getX(168, 100);
console.log(res); // [ 156 ]