/**
 * 题号：92
 * 题目描述：给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表
 * 题目地址：https://leetcode-cn.com/problems/reverse-linked-list-ii/
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// 解法一：拆合-拆成两部分（left前面 + 反转部分 + right后面）比较好理解

const reverseBetween = function (head, left, right) {
  // 虚拟头节点 减少边界判断
  let hair = new ListNode(-1, head)

  // 反转头节点的前一个节点
  let pre = hair
  // 找到pre
  for(let i = 0; i < left - 1; i++) {
    pre = pre.next
  }
  
  // 反转尾节点
  let end = pre
  // 找到end
  for(let i = 0; i < right - left + 1; i++) {
    end = end.next
  }

  // 反转头节点
  const start = pre.next
  // 反转尾节点的后一个节点
  const suc = end.next

  // 断开连接
  pre.next = null
  end.next = null

  // 反转
  reverse(start)

  // 反转后的拼接
  pre.next = end
  start.next = suc

  // 返回
  return hair.next
}
// 普通反转
function reverse(head) {
  // 空链表和只有一个节点的链表不需要反转
  if(head === null || head.next === null)  return false

  let pre = null
  let cur = head
  while(cur !== null) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
}


