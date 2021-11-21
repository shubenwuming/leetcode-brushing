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



// 解法三 头插法
const reverseBetween = function (head, left, right) {
  // 虚拟头节点 ，用来减少边界判断
  let hair = new ListNode(-1, head)
  // 反转部分头节点前一个节点
  let pre = hair
  
  for(let i = 0; i < left - 1; i++) {
    pre = pre.next
  }

  // 待反转头部
  let cur = pre.next

  // 头插法，将 next 插到 反转部分的头
  for(let i = 0; i < right - left + 1; i++) {
    // 保存next
    const next = cur.next
    // 删除next
    cur.next = next.next
    // 往反转头增加next
    next.next = pre.next
    // 拼接
    pre.next = next
  }

  return hair.next
}
