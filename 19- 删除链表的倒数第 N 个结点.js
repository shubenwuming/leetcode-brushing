/**
 * 题号：19
 * leetcode地址：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * 题目描述：给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  // 虚拟头节点
  const dummy = new ListNode(-1, head)
  // pre指针最后指向被删节点的前一个节点， cur指针遍历链表用
  let pre = dummy, cur = head
  
  // cur 先走n步
  while(n--) {
    cur = cur.next
  }

  // pre、cur同时走，直到cur走到了null， 此时pre走到了待删除节点的前一个节点
  while(cur) {
    cur = cur.next
    pre = pre.next
  }

  // 删除节点
  pre.next = pre.next.next

  return dummy.next
}