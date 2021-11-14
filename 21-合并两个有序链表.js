 /**
  * 题号：21
  * 题目地址：https://leetcode-cn.com/problems/merge-two-sorted-lists/
  */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  let virtualHead = new ListNode(null);
  let p = virtualHead;
  while(l1 !== null && l2 !== null) {
    if(l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }
  while(l1 !== null) {
    p.next = l1;
    l1 = l1.next;
    p = p.next;
  }
  while(l2 !== null) {
    p.next = l2;
    l2 = l2.next;
    p = p.next;
  }
  return virtualHead.next;
};