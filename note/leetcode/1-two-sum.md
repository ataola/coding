# 1、两数之和

## 题意

给定一个整数数组`nums`和一个整数目标值`target`，请你在该数组中找出 **和为目标值** 的那**两个** 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

你可以按任意顺序返回答案。

## 示例

### 示例 1：

```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

### 示例 2：

```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

### 示例 3：

```
输入：nums = [3,3], target = 6
输出：[0,1]
```

## 提示：

- `2 <= nums.length <= 103`

- `-109 <= nums[i] <= 109`

- `-109 <= target <= 109`

- `只会存在一个有效答案`

## 题目出处

链接：https://leetcode-cn.com/problems/two-sum

## 思路

抓重点就是，在数组 nums 中找两个元素使其与目标值 target 相等，规则是数组 nums 里面的每一个元素只能使用一次，为了让程序更加容易通过，出题人限定了输入的输出答案有且仅有一个，而且不需要你考虑顺序，你只需要返回其下标就好了。

最通用的手段，暴力破解嘛，两层循环分别找出元素中的两个值，如果与目标 target 值吻合就返回下标，退出程序。

## 代码

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

export default twoSum;
```

## 测试

### 脚本

```javascript
import twoSum from '../../code/leetcode/1';

describe('test function twoSum:', () => {
  test('test case nums = [3, 3], target = 6', () => {
    const data = twoSum([3, 3], 6);
    expect(data).toEqual([0, 1]);
  });

  test('test case nums = [2,7,11,15], target = 9', () => {
    const data = twoSum([2, 7, 11, 15], 9);
    expect(data).toEqual([0, 1]);
  });

  test('test case nums = [3,2,4], target = 6', () => {
    const data = twoSum([3, 2, 4], 6);
    expect(data).toEqual([1, 2]);
  });
});
```

### 结果

```
 ➜  coding git:(master) ✗ npm run test

> coding@1.0.0 test
> jest

 PASS  test/leetcode/1.test.js
  test function twoSum:
    ✓ test case nums = [3, 3], target = 6 (2 ms)
    ✓ test case nums = [2,7,11,15], target = 9
    ✓ test case nums = [3,2,4], target = 6 (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.545 s, estimated 1 s
Ran all test suites.
➜  coding git:(master) ✗
```

## 思考

- 有没有更好的解法

- 存在多个有效答案是什么情况？

- 按从小到大的顺序返回是什么情况？

- 如果改成和为目标值的三个整数呢？

这里笔者象征性地提了几个问题，供读者们阅读后思考，挖坑不填坑哈哈，欢迎在留言下方评论，分享你的见解和想法。

## 说明

本文首发于 GitHub 仓库`https://github.com/ataola/coding`，线上阅读地址：`https://zhengjiangtao.cn/coding/`，转载请注明出处，谢谢！
