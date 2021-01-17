import ListNode from '../base/list-node';
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
