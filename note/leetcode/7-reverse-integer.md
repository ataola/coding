# 7、整数反转

## 题意

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

**注意：**

- 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为  `[−2^31, 2^31 − 1]`。请根据这个假设，如果反转后整数溢出那么就返回 0。

## 示例

### 示例 1：

```
输入：x = 123
输出：321
```

### 示例 2：

```
输入：x = -123
输出：-321
```

### 示例 3：

```
输入：x = 120
输出：21
```

### 示例 4：

```
输入：x = 0
输出：0
```

## 提示：

- `-2^31 <= x <= 2^31 - 1`

## 出处

链接：`https://leetcode-cn.com/problems/reverse-integer`

## 思路

这题假如是个小学一年级的期末考试题，我们大概会这么做，从右边往左边读然后依次写下来，如果读到最后一个是“-”减号，我们就把它放到写下数字的最前面。言下之意就是，我不要把它看成数字处理，我把它看成字符串，然后一翻转。这里考虑下带不带负号，假设带上吧，那你就要考虑最后那位是不是“-”了，如果不带吧，那你就要判断它原值是正数还是负数了。

这里需要注意的是在 Javascript 语言中，Number 类型的范围是`[-2^53 - 1, 2^53 - 1]`,所以如果你转换成字符串处理，你是感受不到溢出的，需要去人肉判断一波，该值是否在题意给定的`[−2^31, 2^31 − 1]`区间。除此之外，Javascript 的字符串中并没有字符串反转的 API，但是有数组反转的 API，所以曲线救国，就先转成字符串然后转成数组反转再转回字符串。这个是完全根据 Javascript 语言特性和小学生思维的解法写的。

当然啦，你也可以按照数字去解题，如果原值不为 0，将原值对于 10 取其余数塞到新组成的字符串的后面，新的原值等于原值整除 10， 前提你还是要先判断有没有溢出，然后该值的正负性。然后如果该值不为 0，要去掉开头的 0， 如示例 3 所示.

## 代码

```
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const str = Math.abs(x).toString();
    const str_reverse = str.split('').reverse().join('');
    return x >= 0 ? Number(str_reverse) > Math.pow(2, 31) - 1 ? 0 : Number(str_reverse) : -Number(str_reverse) < Math.pow(-2, 31) ? 0 : -Number(str_reverse);
};

export default reverse;
```

## 测试

### 脚本

```
import twoSum from '../../code/leetcode/7';

describe('test function reverse:', () => {

    test('test case x = 123', () => {
        const res = twoSum(123);
        expect(res).toBe(321);
    });

    test('test case x = -123', () => {
        const res = twoSum(-123);
        expect(res).toBe(-321);
    });

    test('test case x = 120', () => {
        const res = twoSum(120);
        expect(res).toBe(21);
    });

    test('test case x = 0', () => {
        const res = twoSum(0);
        expect(res).toBe(0);
    });

    test('test case x = 1534236469', () => {
        const res = twoSum(1534236469);
        expect(res).toBe(0);
    });
})
```

## 思考

- 就上面提到的用数字取余数的解法，有兴趣的同学可以取试下

- 题目中给出的区间具体值是多大`2^31-1=2147483647,-2^31=-2147483648`

## 参考

JS 的 Number 类型： `https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number`

## 说明

本文首发于 GitHub 仓库`https://github.com/ataola/coding`，线上阅读地址：`https://zhengjiangtao.cn/coding/`，转载请注明出处，谢谢！
