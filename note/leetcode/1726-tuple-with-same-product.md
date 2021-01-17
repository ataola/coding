# 同积元组

## 题意

给你一个由 不同 正整数组成的数组 `nums` ，请你返回满足  `a * b = c * d `的元组 `(a, b, c, d)` 的数量。其中` a、b、c` 和`d`都是` nums` 中的元素，且 `a != b != c != d `。

## 示例

### 示例 1：

```
输入：nums = [2,3,4,6]
输出：8
解释：存在 8 个满足题意的元组：
(2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
(3,4,2,6) , (3,4,2,6) , (3,4,6,2) , (4,3,6,2)
```

### 示例 2：

```
输入：nums = [1,2,4,5,10]
输出：16
解释：存在 16 个满足题意的元组：
(1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
(2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
(2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,4,5)
(4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)
```

### 示例 3：

```
输入：nums = [2,3,4,6,8,12]
输出：40
```

### 示例 4：

```
输入：nums = [2,3,5,7]
输出：0
```

## 提示

- `1 <= nums.length <= 1000`

- `1 <= nums[i] <= 104`

- `nums 中的所有元素 互不相同`

## 出处

链接：`https://leetcode-cn.com/problems/tuple-with-same-product`

## 思路

这里我也没有特别好的想法，暴力破解吧。这样，先定义一个对象，我把数组 `nums `下所有非本身的项两两相乘，以结果为 `key`，次数为 `val` 记录。最后，我要确定的次数 `val` 和 `nums` 中项的关系，次数 `val` 小于 `4` 的没戏，当`val`为 `4` 时，我们知道有`2`对答案，有多少种组合呢？为了便于理解，我把式子展开`2 * (2 - 1) * 4`, 当 val 为 6 时，有 3 对答案，有多少种组合呢? `3 * (3 - 1) * 4`. 时间关系，我开始进行猜想了，我猜的公式是`num * (num - 1) * 4`, 其中 num 为出现次数 val 折半值。这里简单说一下就是，假设有`num`对，那么式子左边这对出现的次数是`num`，当左边确定了以后，右边那么就是`num-1`. 每队有两种情况，要么 `a` 在 `b `前面，要么 `b` 在 `a`，左右各贡献各 `2 `种可能，那么就是 `4 `种可能。

## 代码

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const tupleSameProduct = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1;
    while (j >= 0) {
      if (i !== j) {
        const num = nums[i] * nums[j];
        if (obj[num]) {
          obj[num]++;
        } else {
          obj[num] = 1;
        }
      }
      j--;
    }
  }
  let count = 0;
  for (const key of Object.keys(obj)) {
    if (obj[key] >= 4) {
      const num = obj[key] / 2;
      count = count + num * (num - 1) * 4;
    }
  }
  return count;
};

export default tupleSameProduct;
```

## 测试

```javascript
import tupleSameProduct from '../../code/leetcode/1726';

describe('test function tupleSameProduct: ', () => {
  test('test case nums = [2,3,4,6]', () => {
    const res = tupleSameProduct([2, 3, 4, 6]);
    expect(res).toBe(8);
  });
  test('test case nums = [1,2,4,5,10]', () => {
    const res = tupleSameProduct([1, 2, 4, 5, 10]);
    expect(res).toBe(16);
  });
  test('test case nums = [2,3,4,6,8,12]', () => {
    const res = tupleSameProduct([2, 3, 4, 6, 8, 12]);
    expect(res).toBe(40);
  });
  test('test case nums = [2,3,5,7]', () => {
    const res = tupleSameProduct([2, 3, 5, 7]);
    expect(res).toBe(0);
  });
  test('test case nums = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]', () => {
    const res = tupleSameProduct([
      1,
      2,
      4,
      8,
      16,
      32,
      64,
      128,
      256,
      512,
      1024,
      2048,
      4096,
      8192,
    ]);
    expect(res).toBe(1288);
  });
});
```

## 说明

本文首发于 GitHub 仓库`https://github.com/ataola/coding`，线上阅读地址：`https://zhengjiangtao.cn/coding/`，转载请注明出处，谢谢！
