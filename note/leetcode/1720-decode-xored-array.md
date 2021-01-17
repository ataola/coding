# 解码异或后的数组

## 题意

未知 整数数组 `arr` 由 `n` 个非负整数组成。

经编码后变为长度为 `n - 1` 的另一个整数数组 `encoded`，其中 `encoded[i] = arr[i] XOR arr[i + 1] `。例如，`arr = [1,0,2,1]` 经编码后得到 `encoded = [1,2,3]` 。

给你编码后的数组 `encoded` 和原数组 `arr` 的第一个元素 `first（arr[0]）`。

请解码返回原数组 `arr` 。可以证明答案存在并且是唯一的。

## 示例

### 示例 1：

```
输入：encoded = [1,2,3], first = 1
输出：[1,0,2,1]
解释：若 arr = [1,0,2,1] ，那么 first = 1 且 encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
```

### 示例 2：

```
输入：encoded = [6,2,7,3], first = 4
输出：[4,2,0,7,4]
```

## 提示

- `2 <= n <= 104`

- `encoded.length == n - 1`

- `0 <= encoded[i] <= 105`

- `0 <= first <= 105`

## 出处

链接：`https://leetcode-cn.com/problems/decode-xored-array`

## 思路

这题考的是异或的交换律，会这题就是送分。简单的说 `a ^ b = c`, 那么`a ^ c = b`也是成立的。所以这题我们知道 first，倒退回去也很简单。

## 代码

```javascript
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function (encoded, first) {
  const arr = [first];
  for (let i = 0; i < encoded.length; i++) {
    const res = encoded[i] ^ arr[i];
    arr.push(res);
  }
  return arr;
};

export default decode;
```

## 测试

```javascript
import decode from '../../code/leetcode/1720';

describe('test function decode: ', () => {
  test('test case encoded = [1,2,3], first = 1', () => {
    const res = decode([1, 2, 3], 1);
    expect(res).toEqual([1, 0, 2, 1]);
  });

  test('test case encoded = [6,2,7,3], first = 4', () => {
    const res = decode([6, 2, 7, 3], 4);
    expect(res).toEqual([4, 2, 0, 7, 4]);
  });
});
```

## 说明

本文首发于 GitHub 仓库`https://github.com/ataola/coding`，线上阅读地址：`https://zhengjiangtao.cn/coding/`，转载请注明出处，谢谢！
