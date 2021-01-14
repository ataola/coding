# 罗马数字转整数

## 题意

罗马数字包含以下七种字符: `I`， `V`， `X`， `L`，`C`，`D`  和 `M`。

```
字符 数值
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
```

例如， 罗马数字 2 写做  `II` ，即为两个并列的 `1`。12 写做  `XII` ，即为  `X + II` 。 27 写做   `XXVII`, 即为  `XX + V + II` 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做  `IIII`，而是  `IV`。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为  `IX`。这个特殊的规则只适用于以下六种情况：

- I  可以放在  V (5) 和  X (10) 的左边，来表示 4 和 9。
- X  可以放在  L (50) 和  C (100) 的左边，来表示 40 和  90。
- C  可以放在  D (500) 和  M (1000) 的左边，来表示  400 和  900。
  给定一个罗马数字，将其转换成整数。输入确保在 1  到 3999 的范围内。

## 示例

### 示例  1:

```
输入: "III"
输出: 3
```

### 示例  2:

```
输入: "IV"
输出: 4
```

### 示例  3:

```
输入: "IX"
输出: 9
```

### 示例  4:

```
输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```

### 示例  5:

```
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

## 提示

- 题目所给测试用例皆符合罗马数字书写规则，不会出现跨位等情况。

- IC 和 IM 这样的例子并不符合题目要求，49 应该写作 XLIX，999 应该写作 CMXCIX 。

- 关于罗马数字的详尽书写规则，可以参考 罗马数字 - Mathematics 。

## 出处

链接：`https://leetcode-cn.com/problems/roman-to-integer`

## 思路

首先明确一下题意，输入一串字符串，输出一个整数。 再次，字符串还挺有规律的，产自罗马。我们自然而然会想到创建一个罗马数字和数字的关系映射，在这里我们可以创建一个对象，根据键值对来解答，也可以试试 Map 来建立他们之间的关系，然后由题意可以知道，存在一些特例，大的数字在小的后面，所以我们顺藤摸瓜地想到了，前后两个元素比大小，如果前面的比后面的大，那么就把前面的加到结果，如果后面的比前面的大，那么就把后面的减去前面的加到结果中去，这里还是要讨论下特殊情况，当只有一个元素的时候，就可以直接返回了，除此之外，因为是整数，做的多了有经验就会去考虑精度会不会溢出，好开心呀，这题输入范围在`[1, 3999]`,过。

## 代码

```javascript
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  if (s.length === 1) {
    res = obj[s];
  } else {
    for (let i = 0; i < s.length; i++) {
      if (obj[s[i]] < obj[s[i + 1]]) {
        res = res + obj[s[i + 1]] - obj[s[i]];
        i++;
      } else {
        res = res + obj[s[i]];
      }
    }
  }
  return res;
};

export default romanToInt;
```

## 测试

```javascript
import romanToInt from '../../code/leetcode/13';

describe('test function romanToInt:', () => {
  test('test case s = MCMXCIV', () => {
    const res = romanToInt('MCMXCIV');
    expect(res).toBe(1994);
  });

  test('test case s = III', () => {
    const res = romanToInt('III');
    expect(res).toBe(3);
  });

  test('test case s = DCXXI', () => {
    const res = romanToInt('DCXXI');
    expect(res).toBe(621);
  });

  test('test case s = MDCXCV', () => {
    const res = romanToInt('MDCXCV');
    expect(res).toBe(1695);
  });
});
```

## 思考

- 在不嫌麻烦的情况下，你能先实现个哈希表，然后再用楼上的想法带进去实现吗？

哈哈哈哈，挖坑不填坑。。。。。。

## 说明

本文首发于 GitHub 仓库`https://github.com/ataola/coding`，线上阅读地址：`https://zhengjiangtao.cn/coding/`，转载请注明出处，谢谢！
