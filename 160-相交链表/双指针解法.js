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
  // 任意一个链表为空,不可能相交
  if(headA === null || headB === null) return null

  // 创建双指针p、q，分别从不同链表头节点开始，遍历两个链表的所有节点
  let p = headA
  let q = headB
  // p、q不相等未遍历继续的条件，
  while(p !== q) {
    // 指针p依次遍历了以headA为起点的链表 、 以headB为起点的链表
    p = p === null ? headB : p.next 
    // 指针q依次遍历了以headB为起点的链表、 以headA为起点的链表
    q = q === null ? headA : q.next 
  }
  // 相交时p为某个节点，不相交时p为null
  return p
};