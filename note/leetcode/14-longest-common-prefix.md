# 最长公共前缀

## 题意

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

## 示例

### 示例 1：

```
输入：strs = ["flower","flow","flight"]
输出："fl"
```

### 示例 2：

```
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```

## 提示

- `0 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i] 仅由小写英文字母组成`

## 出处

链接：https://leetcode-cn.com/problems/longest-common-prefix

## 思路

这里我们需要拿字符串数组 strs 中的第一个字符串 str 进行遍历，然后如果说截取到的字符串 cur 满足题意就把它赋值给 res，不满足就退出循环。这里有一点就是你要单独判断数组为 0 的情况, 然后如果你是用 substr 函数截取的话，长度可以取等号的。 当然你也可以不借助 JS 的一些 API，手动遍历，然后字符串相加求解。

## 代码

### 巧用 JSAPI

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }
  let cur = '';
  let res = '';
  for (let i = 0; i <= strs[0].length; i++) {
    cur = strs[0].substr(0, i);
    if (strs.every((str) => str.startsWith(cur))) {
      res = cur;
    } else {
      break;
    }
  }
  return res;
};

export default longestCommonPrefix;
```

### 传统的解法

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let res = '';
  if (strs.length !== 0) {
    for (let i = 0; i < strs[0].length; i++) {
      if (strs.every((str) => str[i] === strs[0][i])) {
        res += strs[0][i];
      } else {
        break;
      }
    }
  }
  return res;
};

export default longestCommonPrefix;
```

## 测试

```javascript
import longestCommonPrefix from '../../code/leetcode/14';

describe('test function longestCommonPrefix:', () => {
  test('test case strs = []', () => {
    const res = longestCommonPrefix([]);
    expect(res).toBe('');
  });

  test('test case strs = ["flower","flow","flight"]', () => {
    const res = longestCommonPrefix(['flower', 'flow', 'flight']);
    expect(res).toBe('fl');
  });

  test('test case strs = ["dog","racecar","car"]', () => {
    const res = longestCommonPrefix(['dog', 'racecar', 'car']);
    expect(res).toBe('');
  });

  test('test case strs = ["flower","flower","flower","flower"]', () => {
    const res = longestCommonPrefix(['flower', 'flower', 'flower', 'flower']);
    expect(res).toBe('flower');
  });

  test('test case strs = ["a"]', () => {
    const res = longestCommonPrefix(['a']);
    expect(res).toBe('a');
  });
});
```

## 说明

本文首发于 GitHub 仓库`https://github.com/ataola/coding`，线上阅读地址：`https://zhengjiangtao.cn/coding/`，转载请注明出处，谢谢！
