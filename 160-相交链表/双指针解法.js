/**
 * 题号：160
 * leetcode地址：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
  if(headA === null || headB === null) return null

  let p = headA
  let q = headB

  while(p !== q) {
    p = p === null ? headB : p.next 
    q = q === null ? headA : q.next 
  }

  return p
};