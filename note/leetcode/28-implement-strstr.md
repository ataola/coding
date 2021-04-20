# 28. 实现 strStr()

## 题意

实现`strStr()`函数。

给你两个字符串`haystack`和`needle` ，请你在`haystack`字符串中找出`needle`字符串出现的第一个位置（下标从`0`开始）。如果不存在，则返回`-1`。

当`needle`是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当`needle`是空字符串时我们应当返回 `0`。这与 C 语言的`strstr()`以及 Java 的`indexOf()`定义相符。

## 示例

### 示例 1：

```
输入：haystack = "hello", needle = "ll"
输出：2
```

### 示例 2：

```
输入：haystack = "aaaaa", needle = "bba"
输出：-1
```

### 示例 3：

```
输入：haystack = "", needle = ""
输出：0
```

## 提示

- `0 <= haystack.length, needle.length <= 5 \* 104`

- `haystack 和 needle 仅由小写英文字符组成`

## 出处

链接：https://leetcode-cn.com/problems/implement-strstr/

## 思路

这里对题目给出的题意我们先考虑特殊情况，比如最后提到的空字符串返回什么问题， 然后可以根据两个参数的长度进行分类讨论，之后的话做法是把`haystack`所有可以出现的位置存到一个数组里面，然后我们去遍历它，在里面遍历`needle`，如果每个都相等的话，那么我们就把存进数组的左指针返回

## 代码

```javascript
const strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  }
  const haystack_len = haystack.length;
  const needle_len = needle.length;
  if (needle_len > haystack_len) {
    return -1;
  } else if (needle_len === haystack_len) {
    return haystack === needle ? 0 : -1;
  }
  const target = needle[0];
  const position = [];
  for (const index in haystack) {
    if (haystack[index] === target) {
      position.push(+index);
    }
  }
  for (const left of position) {
    let right = left;
    for (let i = 0; i < needle_len; i++) {
      if (haystack[right] === needle[i]) {
        if (i === needle_len - 1) {
          return left;
        }
        right++;
      } else {
        break;
      }
    }
  }
  return -1;
};

export default strStr;
```

## 测试

```javascript
import strStr from '../../code/leetcode/28';

describe('test function strStr:', () => {
  test('test case str="mississippi", needle="mississippii", target = -1', () => {
    const data = strStr('mississippi', 'mississippii');
    expect(data).toEqual(-1);
  });

  test('test case str="mississippi", needle="mississippii", target = -1', () => {
    const data = strStr('mississippi', 'issi');
    expect(data).toEqual(1);
  });

  test('test case str="a", needle="a", target = 0', () => {
    const data = strStr('a', 'a');
    expect(data).toEqual(0);
  });

  test('test case str="abc", needle="c", target = 2', () => {
    const data = strStr('abc', 'c');
    expect(data).toEqual(2);
  });

  test('test case str="hello", needle="ll", target = 2', () => {
    const data = strStr('hello', 'll');
    expect(data).toEqual(2);
  });

  test('test case str="aaaaa", needle="bba", target = -1', () => {
    const data = strStr('aaaaa', 'bba');
    expect(data).toEqual(-1);
  });

  test('test case str="", needle="", target = 0', () => {
    const data = strStr('', '');
    expect(data).toEqual(0);
  });
});
```

## 说明

本文首发于 GitHub 仓库`https://github.com/ataola/coding`，线上阅读地址：`https://zhengjiangtao.cn/coding/`，转载请注明出处，谢谢！
