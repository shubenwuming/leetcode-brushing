/**
 * 题号：61
 * leetcode地址：https://leetcode-cn.com/problems/rotate-list/
 * 题目描述：给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
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
 * @param {number} k
 * @return {ListNode}
 */

const rotateRight = function (head, k) {
  // 空链表、只用一个节点的链表、k = 0 时 不需要旋转
  if (head === null || head.next === null || k === 0) return head

  // 指针，遍历节点用
  let p = head
  // 链表长度
  let len = 1

  // 遍历确定链表长度，找到尾节点以连成环
  while(p.next !== null) {
    p = p.next
    len++
  }

  // 成环
  p.next = head

  // 确定p移动步长，得到新链表的尾巴，这里断环得到的就是翻转链表
  let move = len - k % len   // k可能大于链表长度，取余为右移距离

  while(move !== 0) {
    p = p.next
    move--
  }
  
  // 保存翻转链表头
  let newHead = p.next

  // 断尾
  p.next = null

  return newHead

}