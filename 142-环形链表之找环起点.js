 /**
  * 题号： 142题
  * 题目地址：https://leetcode-cn.com/problems/linked-list-cycle-ii/
  */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let p = head;
  let q = head;
  while(q && q.next) {
    p = p.next;
    q = q.next.next;
    if(p === q) {
      p = head;
      while(p !== q) {
        p = p.next;
        q = q.next;
      }
      return p;
    }
  }
  return null;
};