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
