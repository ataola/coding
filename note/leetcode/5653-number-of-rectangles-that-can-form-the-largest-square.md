# 可以形成最大正方形的矩形数目

## 题意

给你一个数组 `rectangles` ，其中 `rectangles[i] = [li, wi]` 表示第 `i` 个矩形的长度为 `li `、宽度为 `wi `。

如果存在 `k `同时满足 `k <= li` 和 `k <= wi `，就可以将第 `i `个矩形切成边长为 `k `的正方形。例如，矩形 `[4,6] `可以切成边长最大为 `4 `的正方形。

设 `maxLen` 为可以从矩形数组  `rectangles` 切分得到的 最大正方形 的边长。

返回可以切出边长为 `maxLen` 的正方形的矩形 数目 。

## 示例

### 示例 1：

```
输入：rectangles = [[5,8],[3,9],[5,12],[16,5]]
输出：3
解释：能从每个矩形中切出的最大正方形边长分别是 [5,3,5,5] 。
最大正方形的边长为 5 ，可以由 3 个矩形切分得到。
```

### 示例 2：

```
输入：rectangles = [[2,3],[3,7],[4,3],[3,7]]
输出：3
```

## 提示

- `1 <= rectangles.length <= 1000`

- `rectangles[i].length == 2`

- `1 <= li, wi <= 109`

- `li != wi`

## 出处

链接：`https://leetcode-cn.com/problems/number-of-rectangles-that-can-form-the-largest-square`

## 思路

这题翻译一下就是，计算二维数组中每一项的最小的值，然后求出现最小值中的最大值的次数。我们可以用一个对象去记录最小值出现的次数，然后求其最大值的次数。

## 代码

```javascript
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const countGoodRectangles = function (rectangles) {
  const obj = {};
  rectangles.forEach((item) => {
    const res = item[0] > item[1] ? item[1] : item[0];
    if (obj[res]) {
      obj[res]++;
    } else {
      obj[res] = 1;
    }
    return res;
  });
  const max = Math.max.apply(this, Object.keys(obj));
  return obj[max];
};

export default countGoodRectangles;
```

## 测试

```javascript
import countGoodRectangles from '../../code/leetcode/5653';

describe('test function countGoodRectangles: ', () => {
  test('test case rectangles = [[5,8],[3,9],[5,12],[16,5]]', () => {
    const res = countGoodRectangles([
      [5, 8],
      [3, 9],
      [5, 12],
      [16, 5],
    ]);
    expect(res).toBe(3);
  });
  test('test case rectangles = [[2,3],[3,7],[4,3],[3,7]]', () => {
    const res = countGoodRectangles([
      [2, 3],
      [3, 7],
      [4, 3],
      [3, 7],
    ]);
    expect(res).toBe(3);
  });
});
```

## 说明

本文首发于 GitHub 仓库`https://github.com/ataola/coding`，线上阅读地址：`https://zhengjiangtao.cn/coding/`，转载请注明出处，谢谢！
