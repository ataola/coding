# 交换链表中的节点

## 题意

给你链表的头节点 `head` 和一个整数 `k` 。

交换 链表正数第 `k` 个节点和倒数第 `k` 个节点的值后，返回链表的头节点（链表 从 1 开始索引）。

## 示例

### 示例 1：

![linkedlist](../../img/linked1.jpg)

```
输入：head = [1,2,3,4,5], k = 2
输出：[1,4,3,2,5]
```

### 示例 2：

```
输入：head = [7,9,6,6,7,8,3,0,9,5], k = 5
输出：[7,9,6,6,8,7,3,0,9,5]
```

### 示例 3：

```
输入：head = [1], k = 1
输出：[1]
```

### 示例 4：

```
输入：head = [1,2], k = 1
输出：[2,1]
```

### 示例 5：

```
输入：head = [1,2,3], k = 2
输出：[1,2,3]
```

## 提示

- `链表中节点的数目是 n`

- `1 <= k <= n <= 105`

- `0 <= Node.val <= 100`

## 出处

链接：`https://leetcode-cn.com/problems/swapping-nodes-in-a-linked-list`

## 思路

这题常规的做法是，找到第 k 个节点的上一个节点，然后将其 next 指向倒数第 k 个节点的，再将倒数第 k 个节点的 next 指向第 k 个节点的 next，然后将倒数第 k + 1 节点的 next 指向第 k 个节点，第 k 个节点的 next 节点指向倒数第 k 个节点的 next 节点。是不是有点绕，我倒是有个不成熟的想法，也试着去提交了下，发现能过。就是我把所以的 val 值取出来转数组，在 js 中，单纯的同类型数组，它在内存中是连续的，所以其访问复杂度是 O(1),所以我们把生成的数组的第（k - 1）个 和 数组的长度减去 k 的那位交换。最后我们构造一个新的链表返回，当然啦，后面笔者比较菜用了两次遍历去构造这个链表然后返回。

## 代码

```javascript
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function (head, k) {
  const arr = [];
  while (head.next) {
    arr.push(head.val);
    head = head.next;
  }
  head && arr.push(head.val);
  let tmp = arr[k - 1];
  arr[k - 1] = arr[arr.length - k];
  arr[arr.length - k] = tmp;
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    res.push(node);
  }
  for (let i = 0; i < arr.length - 1; i++) {
    res[i].next = res[i + 1];
  }
  return res[0];
};

export default swapNodes;
```

## 测试

```javascript
import ListNode from '../../code/base/list-node';
import swapNodes from '../../code/leetcode/1721';

describe('test function swapNodes: ', () => {
  test('test case head = [1,2,3,4,5], k = 2', () => {
    const before = [1, 2, 3, 4, 5];
    const res_before = [];
    for (let i = 0; i < before.length; i++) {
      const node = new ListNode(before[i]);
      res_before.push(node);
    }
    for (let i = 0; i < before.length - 1; i++) {
      res_before[i].next = res_before[i + 1];
    }
    const after = [1, 4, 3, 2, 5];
    const res_after = [];
    for (let i = 0; i < after.length; i++) {
      const node = new ListNode(after[i]);
      res_after.push(node);
    }
    for (let i = 0; i < after.length - 1; i++) {
      res_after[i].next = res_after[i + 1];
    }
    const res = swapNodes(res_before[0], 2);
    expect(res).toEqual(res_after[0]);
  });
});
```

## 思考

- 请读者思考，用楼上提到的常规解法去求解

- 请读者思考，如果在笔者的基础上，进一步优化代码

哈哈哈，挖坑不填坑。。。

## 说明

本文首发于 GitHub 仓库`https://github.com/ataola/coding`，线上阅读地址：`https://zhengjiangtao.cn/coding/`，转载请注明出处，谢谢！
