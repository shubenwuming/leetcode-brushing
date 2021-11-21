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



// 解法二：拆合-拆成两部分（left前面 + 反转前n个节点）与解法一实际差不多
const reverseBetween = function (head, left, right) {
  // 虚拟头节点，减少边界判断
  let hair = new ListNode(-1, head)
  // 反转头节点 的 前一个节点
  let pre = hair

  // 计数，left 后 反转前n 个节点
  const n = right - left + 1

  // 找到pre
  while(left - 1 > 0) {
    pre = pre.next
    left--
  }

  // 反转前n个节点，返回反转头
  let p = reverse(pre.next, n)


  // 拼接 pre + 反转头
  pre.next = p

  // 返回结果
  return hair.next
  
}


// 返回头节点
function reverse(head, n)  {
  let pre = null
  // 记录未反转的头
  let cur = head
 
  // 反转前n个节点
  while(n > 0) {
    const next = cur.next
    cur.next = pre
    pre = cur 
    cur = next
    n--
  }

  // 此时head 是 反转部分的尾，cur 是 反转尾的下一个节点
  head.next = cur

  return pre
}
