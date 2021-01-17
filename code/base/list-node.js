/**
 * Definition for singly-linked list.
 */

const ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

export default ListNode;
