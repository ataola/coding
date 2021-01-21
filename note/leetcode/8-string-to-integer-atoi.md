# 字符串转换整数 (atoi)

## 题意

请你来实现一个  `atoi`  函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。接下来的转化规则如下：

如果第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字字符组合起来，形成一个有符号整数。
假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成一个整数。
该字符串在有效的整数部分之后也可能会存在多余的字符，那么这些字符可以被忽略，它们对函数不应该造成影响。
假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换，即无法进行有效转换。

在任何情况下，若函数不能进行有效的转换时，请返回 `0` 。

注意：

- 本题中的空白字符只包括空格字符 `' ' `。

- 假设我们的环境只能存储 `32` 位大小的有符号整数，那么其数值范围为  `[−2^31, 2^31 − 1]`。如果数值超过这个范围，请返回   `2^31 − 1 或 −2^31` 。

## 示例

### 示例  1:

```
输入: "42"
输出: 42
```

### 示例  2:

```
输入: " -42"
输出: -42
解释: 第一个非空白字符为 '-', 它是一个负号。
  我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
```

### 示例  3:

```
输入: "4193 with words"
输出: 4193
解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
```

### 示例  4:

```
输入: "words and 987"
输出: 0
解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
因此无法执行有效的转换。
```

### 示例  5:

```
输入: "-91283472332"
输出: -2147483648
解释: 数字 "-91283472332" 超过 32 位有符号整数范围。
  因此返回 INT_MIN (−231) 。
```

## 提示

- `0 <= s.length <= 200`

- `s 由英文字母（大写和小写）、数字、' '、'+'、'-' 和 '.' 组成`

## 出处

链接：https://leetcode-cn.com/problems/string-to-integer-atoi

## 思路

这题真的没啥好讲的，因为顺着题目的描述就能出答案，首先的话就是字符串开头去空，这件事情你可以交给`trim`函数，然后下面三种情况它也给你理出来了，照着翻译呗。后来又补了句无法转化就返回 0，然后把目光转到注意，这里它确定了数值的最大最小值要注意下。

## 代码

```javascript
/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  s = s.trim();
  if (!s || /[a-z]/.test(s[0])) {
    return 0;
  }
  const res = parseInt(s);
  if (!res) {
    return 0;
  }
  const min = Math.pow(-2, 31);
  const max = -min - 1;
  return res < min ? min : res > max ? max : res;
};

export default myAtoi;
```

## 测试

```javascript
import myAtoi from '../../code/leetcode/8';

describe('test function myAtoi: ', () => {
  test('test case s = "42"', () => {
    const res = myAtoi('42');
    expect(res).toBe(42);
  });

  test('test case s = " -42"', () => {
    const res = myAtoi(' -42');
    expect(res).toBe(-42);
  });

  test('test case s = "4193 with words"', () => {
    const res = myAtoi('4193 with words');
    expect(res).toBe(4193);
  });

  test('test case s = "words and 987"', () => {
    const res = myAtoi('words and 987');
    expect(res).toBe(0);
  });

  test('test case s = "-91283472332"', () => {
    const res = myAtoi('-91283472332');
    expect(res).toBe(-2147483648);
  });
});
```

## 说明

本文首发于 GitHub 仓库`https://github.com/ataola/coding`，线上阅读地址：`https://zhengjiangtao.cn/coding/`，转载请注明出处，谢谢！
