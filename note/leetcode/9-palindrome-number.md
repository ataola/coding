# 回文数

## 题意

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

## 示例

示例 1:

```
输入: 121
输出: true
```

示例  2:

```
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

示例 3:

```
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```

## 进阶

你能不将整数转为字符串来解决这个问题吗？

## 出处

链接：https://leetcode-cn.com/problems/palindrome-number

## 思路

正如题中的进阶提升所言，把它转成字符串是较为巧妙和方便的，当然啦，常规的做法就是将输入的数字对 10 取其余数放到一个临时数组，然后将输入的数字整除于 10 的值赋值给输入的数字，依次类推，直到输入为 0，然后将其反转做对比。

## 代码

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const left = x.toString();
  const right = left.split('').reverse().join('');
  return left === right;
};

export default isPalindrome;
```

## 测试

```javascript
import isPalindrome from '../../code/leetcode/9';

describe('test function isPalindrome:', () => {
  test('test case x = 121', () => {
    const res = isPalindrome(121);
    expect(res).toBe(true);
  });

  test('test case x = -121', () => {
    const res = isPalindrome(-123);
    expect(res).toBe(false);
  });

  test('test case x = 10', () => {
    const res = isPalindrome(10);
    expect(res).toBe(false);
  });
});
```

## 思考

- 请有兴趣的读者补充完整用数字的解法，欢迎在评论下方留言

## 说明

本文首发于 GitHub 仓库`https://github.com/ataola/coding`，线上阅读地址：`https://zhengjiangtao.cn/coding/`，转载请注明出处，谢谢！
