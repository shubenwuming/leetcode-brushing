/**
 * 题号：25
 * leetcode地址：https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 * 题目描述：给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
            k 是一个正整数，它的值小于或等于链表的长度。
            如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
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

const reverseKGroup = function (head, k) {
  // dummy 虚拟头节点，
  // 头节点上一个结点不存在，很多对于需要用上个节点的操作就需要单独考虑头节点，用虚拟头节点可以解决这个问题
  const dummy = new ListNode(-1, head)
  // 该指针 指向 已翻转的尾节点
  let pre = dummy

  while(1) {
    // 翻转前K个节点后，拼接到已翻转的尾节点后
    pre.next = reverseK(pre.next, k)

    // 该循环用来判断  未翻转的节点个数是否少于k
    for(let i = 0; i < k && pre; i++) {
      pre = pre.next
    }

    // 未翻转节点个数 不足k
    if(!pre) break
  
  }

  return dummy.next
}

function reverseK(head, k) {
  let pre = null, cur = head
  // 待反转节点数 小于 k 则不用翻转
  for(let i = 0; i < k - 1 && cur; i++) {
    cur = cur.next
  }
  if(!cur) return head
  
  // 走到这里说明节点数 大于 k
  // cur指针重新指向head,我们开始正式翻转
  cur = head
  
  // 依次调换指针，完成翻转
  while(k--) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  
  // 翻转尾head拼未翻转部分
  head.next = cur
  
  // 翻转后的头
  return pre

}
